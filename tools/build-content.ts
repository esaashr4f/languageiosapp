// Converts content/<code>/ into app-content/<code>.json bundles plus one small index.json.
// Usage: tsx tools/build-content.ts [--root content] [--out app-content] [lang ...]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { args, langDirs, lessonFiles, parseLesson, readJson, wordCounts, type Syllabus } from "./lib.ts";

const a = args();
const root = a.flag("--root") ?? "content";
const out = a.flag("--out") ?? "app-content";
fs.mkdirSync(out, { recursive: true });

const languages = readJson<{ languages: Record<string, unknown>[] }>("languages.json")?.languages ?? [];
const index: Record<string, unknown>[] = [];
const built = new Map<string, Record<string, unknown>>();

for (const lang of langDirs(root, a.rest())) {
  const dir = path.join(root, lang);
  const meta = readJson<Record<string, unknown>>(path.join(dir, "meta.json"));
  const syllabus = readJson<Syllabus>(path.join(dir, "syllabus.json"));
  if (!meta || !syllabus) continue;
  const status = readJson<{ lessons: Record<string, { state: string }> }>(path.join(dir, "STATUS.json"));
  const parsed = new Map(lessonFiles(dir).map((f) => { const l = parseLesson(f); return [l.front.id, l] as const; }));
  let words = 0;
  const lessons = syllabus.lessons.filter((s) => parsed.has(s.id)).map((s) => {
    const l = parsed.get(s.id)!;
    const wc = wordCounts(l.blocks);
    words += wc.total;
    // Line numbers are a linting aid; the app does not need them.
    const blocks = l.blocks.filter((b) => b.type !== "rawtable").map((b) => { const { line, bad, ...keep } = b as Record<string, unknown>; return keep; });
    return { ...l.front, state: status?.lessons[s.id]?.state ?? "drafted", words: wc.total, blocks };
  });
  const bundle = {
    meta, parts: syllabus.parts,
    contents: syllabus.lessons.map((s) => ({ id: s.id, part: s.part, order: s.order, title: s.title, point: s.point ?? "", available: parsed.has(s.id) })),
    lessons,
    glossary: readJson(path.join(dir, "glossary.json")) ?? { abbreviations: {} },
    vocab: readJson(path.join(dir, "vocab.json")) ?? { words: [] },
    sources: readJson<{ sources: unknown[] }>(path.join(dir, "sources.json"))?.sources ?? [],
  };
  const json = JSON.stringify(bundle);
  fs.writeFileSync(path.join(out, `${lang}.json`), json);
  built.set(lang, { lessons_available: lessons.length, lessons_planned: syllabus.lessons.length, words, bundle: `${lang}.json`, bundle_bytes: Buffer.byteLength(json), bundle_hash: crypto.createHash("sha256").update(json).digest("hex").slice(0, 12), meta });
  console.log(`${lang}: ${lessons.length}/${syllabus.lessons.length} lessons, ${words} words, ${(Buffer.byteLength(json) / 1024).toFixed(0)} kB`);
}

// index.json lists all 100 languages so the Atlas screen can show guides that are not written yet.
const seen = new Set<string>();
for (const l of languages) { const iso = l.iso as string; seen.add(iso); index.push({ ...l, ...(built.get(iso) ?? { lessons_available: 0 }) }); }
for (const [iso, b] of built) if (!seen.has(iso)) index.push({ iso, ...b });
fs.writeFileSync(path.join(out, "index.json"), JSON.stringify({ generated: new Date().toISOString().slice(0, 10), languages: index }));
console.log(`index.json: ${index.length} languages, ${built.size} with content`);
