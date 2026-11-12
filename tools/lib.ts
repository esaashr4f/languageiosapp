// Shared parsing for the content tools. See docs/CONTENT_FORMAT.md.
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export const LABELS = ["verified", "attested", "constructed", "unverified", "uncertain"] as const;
export const STATES = ["planned", "drafted", "verified", "done"] as const;

export type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "para"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "example"; fields: Record<string, string>; line: number }
  | { type: "table"; fields: Record<string, string>; header: string[]; rows: string[][]; line: number }
  | { type: "vocab"; entries: VocabEntry[]; line: number; bad: string[] }
  | { type: "rawtable"; line: number };

export interface VocabEntry { headword: string; translit: string; pos: string; meaning: string; forms: string }

export interface Front {
  id: string; lang: string; part: number; order: number; title: string; point: string;
  requires: string[]; introduces: string[]; confidence: string; sources: string[];
}

export interface Lesson { file: string; front: Partial<Front>; frontError?: string; blocks: Block[]; body: string }

const splitRow = (l: string) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
const kv = (l: string): [string, string] | null => {
  const m = /^([a-z_]+):\s*(.*)$/.exec(l.trim());
  return m ? [m[1], m[2].trim()] : null;
};

export function parseLesson(file: string): Lesson {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!m) return { file, front: {}, frontError: "missing YAML front matter", blocks: [], body: raw };
  let front: Partial<Front> = {};
  let frontError: string | undefined;
  try { front = YAML.parse(m[1]) ?? {}; } catch (e) { frontError = `bad YAML: ${(e as Error).message}`; }
  const offset = m[1].split("\n").length + 2;
  return { file, front, frontError, blocks: parseBody(m[2], offset), body: m[2] };
}

export function parseBody(body: string, offset = 0): Block[] {
  const lines = body.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  let para: string[] = [];
  const flush = () => { if (para.length) { blocks.push({ type: "para", text: para.join(" ") }); para = []; } };
  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();
    const fence = /^:::(example|table|vocab)\s*$/.exec(t);
    if (fence) {
      flush();
      const start = i + 1 + offset;
      const inner: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") { inner.push(lines[i]); i++; }
      i++;
      if (fence[1] === "example") {
        const fields: Record<string, string> = {};
        let last = "";
        for (const l of inner) {
          const p = kv(l);
          if (p) { fields[p[0]] = p[1]; last = p[0]; }
          else if (l.trim() && last) fields[last] += " " + l.trim();
        }
        blocks.push({ type: "example", fields, line: start });
      } else if (fence[1] === "table") {
        const fields: Record<string, string> = {};
        const rows: string[][] = [];
        for (const l of inner) {
          if (l.trim().startsWith("|")) { if (!/^\|[\s:|-]+\|$/.test(l.trim())) rows.push(splitRow(l)); }
          else { const p = kv(l); if (p) fields[p[0]] = p[1]; }
        }
        blocks.push({ type: "table", fields, header: rows[0] ?? [], rows: rows.slice(1), line: start });
      } else {
        const entries: VocabEntry[] = [];
        const bad: string[] = [];
        for (const l of inner) {
          if (!l.trim()) continue;
          const c = l.split("|").map((x) => x.trim());
          if (c.length < 4 || !c[0] || !c[2] || !c[3]) { bad.push(l); continue; }
          entries.push({ headword: c[0], translit: c[1] === "-" ? "" : c[1], pos: c[2], meaning: c[3], forms: c[4] ?? "" });
        }
        blocks.push({ type: "vocab", entries, line: start, bad });
      }
      continue;
    }
    if (!t) { flush(); i++; continue; }
    const h = /^(#{1,4})\s+(.*)$/.exec(t);
    if (h) { flush(); blocks.push({ type: "heading", level: h[1].length, text: h[2].trim() }); i++; continue; }
    if (t.startsWith("|")) {
      flush();
      blocks.push({ type: "rawtable", line: i + 1 + offset });
      while (i < lines.length && lines[i].trim().startsWith("|")) i++;
      continue;
    }
    const li = /^(\d+\.|[-*])\s+(.*)$/.exec(t);
    if (li) {
      flush();
      const ordered = /\d/.test(li[1]);
      const items: string[] = [];
      while (i < lines.length) {
        const cur = lines[i];
        const mm = /^(\d+\.|[-*])\s+(.*)$/.exec(cur.trim());
        if (mm && /\d/.test(mm[1]) === ordered && !/^\s{2,}/.test(cur)) { items.push(mm[2]); i++; }
        else if (cur.trim() && /^\s{2,}/.test(cur) && items.length) { items[items.length - 1] += " " + cur.trim(); i++; }
        else if (!cur.trim() && i + 1 < lines.length && (/^\s{2,}\S/.test(lines[i + 1]) || new RegExp(ordered ? "^\\d+\\.\\s" : "^[-*]\\s").test(lines[i + 1]))) { i++; }
        else break;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    para.push(t);
    i++;
  }
  flush();
  return blocks;
}

const count = (s: string) => (s.match(/[\p{L}\p{N}][\p{L}\p{N}\p{M}'’-]*/gu) ?? []).length;

/** Prose words: headings, paragraphs and lists. Block contents are counted separately. */
export function wordCounts(blocks: Block[]) {
  let prose = 0, inBlocks = 0;
  for (const b of blocks) {
    if (b.type === "heading" || b.type === "para") prose += count(b.text);
    else if (b.type === "list") prose += b.items.reduce((n, x) => n + count(x), 0);
    else if (b.type === "example") inBlocks += Object.values(b.fields).reduce((n, x) => n + count(x), 0);
    else if (b.type === "table") inBlocks += [b.header, ...b.rows].flat().reduce((n, x) => n + count(x), 0);
    else if (b.type === "vocab") inBlocks += b.entries.reduce((n, e) => n + count(e.headword + " " + e.meaning + " " + e.forms), 0);
  }
  return { prose, inBlocks, total: prose + inBlocks };
}

/** Section name (h2) each block sits under. */
export function sections(blocks: Block[]): { name: string; blocks: Block[] }[] {
  const out: { name: string; blocks: Block[] }[] = [{ name: "", blocks: [] }];
  for (const b of blocks) {
    if (b.type === "heading" && b.level === 2) out.push({ name: b.text, blocks: [] });
    else out[out.length - 1].blocks.push(b);
  }
  return out;
}

export interface Glossary { abbreviations: Record<string, { name: string; plain: string; tag: string }>; terms?: Record<string, string> }
export interface SyllabusLesson { id: string; part: number; order: number; slug: string; title: string; point?: string; requires: string[]; introduces: string[]; review?: boolean }
export interface Syllabus { lang: string; parts: { part: number; title: string; summary?: string }[]; lessons: SyllabusLesson[] }

export const readJson = <T>(f: string): T | null => (fs.existsSync(f) ? (JSON.parse(fs.readFileSync(f, "utf8")) as T) : null);

export function langDirs(root: string, only: string[] = []): string[] {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root).filter((d) => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith(".") && (only.length === 0 || only.includes(d))).sort();
}

export function lessonFiles(dir: string): string[] {
  const l = path.join(dir, "lessons");
  return fs.existsSync(l) ? fs.readdirSync(l).filter((f) => f.endsWith(".md")).sort().map((f) => path.join(l, f)) : [];
}

export const lessonFileName = (l: { part: number; order: number; slug: string }) =>
  `${String(l.part).padStart(2, "0")}-${String(l.order).padStart(2, "0")}-${l.slug}.md`;

/** Grammatical abbreviations in one gloss string, e.g. "girl-ACC.SG see-PRS.3SG" -> ACC, SG, PRS, 3, SG. */
export function glossAbbreviations(gloss: string): string[] {
  const out: string[] = [];
  for (const piece of gloss.split(/[\s\-=.:;()\\/<>~,\[\]]+/)) {
    if (!piece) continue;
    const m = /^([123])?([A-Z][A-Z0-9]*)?$/.exec(piece);
    if (!m) continue;
    if (m[1]) out.push(m[1]);
    if (m[2]) out.push(m[2]);
  }
  return out;
}

export function args() {
  const a = process.argv.slice(2);
  const flag = (n: string) => { const i = a.indexOf(n); if (i < 0) return undefined; const v = a[i + 1]; a.splice(i, 2); return v; };
  const has = (n: string) => { const i = a.indexOf(n); if (i < 0) return false; a.splice(i, 1); return true; };
  return { flag, has, rest: () => a };
}
