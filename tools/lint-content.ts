// Content linter: schema, gloss alignment, dependency order, word counts.
// Usage: tsx tools/lint-content.ts [--root content] [--quiet] [lang ...] [path/to/lesson.md ...]
import fs from "node:fs";
import path from "node:path";
import {
  LABELS, STATES, args, glossAbbreviations, langDirs, lessonFileName, lessonFiles, parseLesson, readJson, sections, wordCounts,
  type Glossary, type Lesson, type Syllabus,
} from "./lib.ts";

const a = args();
const root = a.flag("--root") ?? "content";
const quiet = a.has("--quiet");
const rest = a.rest();
const onlyFiles = rest.filter((r) => r.endsWith(".md")).map((f) => path.resolve(f));
const onlyLangs = [...rest.filter((r) => !r.endsWith(".md")), ...onlyFiles.map((f) => path.basename(path.dirname(path.dirname(f))))];

let errors = 0, warnings = 0;
const err = (where: string, msg: string) => { errors++; console.log(`ERROR ${where}: ${msg}`); };
const warn = (where: string, msg: string) => { warnings++; if (!quiet) console.log(`warn  ${where}: ${msg}`); };

const TEMPLATE = ["The idea", "How it is built", "Examples", "Where it applies", "Watch out", "Reference table", "New words", "Connections", "Exercises", "Worked answers"];
const REQUIRED = ["The idea", "How it is built", "Examples", "Watch out", "New words", "Exercises", "Worked answers"];
const EXAMPLE_FIELDS = ["orig", "morphemes", "gloss", "translation", "note", "source", "confidence"];
const splitWord = (w: string) => w.split(/[-=]/);

for (const lang of langDirs(root, onlyLangs)) {
  const dir = path.join(root, lang);
  const syllabus = readJson<Syllabus>(path.join(dir, "syllabus.json"));
  const meta = readJson<Record<string, unknown>>(path.join(dir, "meta.json"));
  if (!syllabus) { warn(lang, "no syllabus.json yet; skipped"); continue; }
  if (!meta) err(lang, "meta.json missing");
  for (const k of ["name", "endonym", "iso", "family", "region", "era", "status", "scripts", "typology", "depth", "hook", "difficulty"])
    if (meta && meta[k] === undefined) err(`${lang}/meta.json`, `missing "${k}"`);
  const glossary = readJson<Glossary>(path.join(dir, "glossary.json")) ?? { abbreviations: {} };
  const sources = readJson<{ sources: { id: string }[] }>(path.join(dir, "sources.json"));
  if (!sources) err(lang, "sources.json missing");
  if (!fs.existsSync(path.join(dir, "dossier.md"))) err(lang, "dossier.md missing");
  const sourceIds = new Set((sources?.sources ?? []).map((s) => s.id));
  const status = readJson<{ lessons: Record<string, { state: string }> }>(path.join(dir, "STATUS.json"));
  if (!status) err(lang, "STATUS.json missing");
  const translitOptional = meta?.translit_optional === true;

  // Syllabus integrity: unique ids, requires point backwards, every abbreviation tag is introduced somewhere.
  const pos = new Map<string, number>();
  const tagAt = new Map<string, number>();
  syllabus.lessons.forEach((l, i) => {
    const want = `${lang}-${String(l.part).padStart(2, "0")}-${String(l.order).padStart(2, "0")}`;
    if (l.id !== want) err(`${lang}/syllabus`, `${l.id}: id should be ${want}`);
    if (pos.has(l.id)) err(`${lang}/syllabus`, `${l.id}: duplicate id`);
    for (const r of l.requires) if (!pos.has(r)) err(`${lang}/syllabus`, `${l.id}: requires ${r}, which is not an earlier lesson`);
    pos.set(l.id, i);
    for (const t of l.introduces) { if (tagAt.has(t)) err(`${lang}/syllabus`, `${l.id}: tag "${t}" already introduced`); else tagAt.set(t, i); }
    if (i > 0) { const p = syllabus.lessons[i - 1]; if (l.part < p.part || (l.part === p.part && l.order !== p.order + 1) || (l.part > p.part && l.order !== 1)) err(`${lang}/syllabus`, `${l.id}: out of sequence after ${p.id}`); }
  });
  for (const [ab, g] of Object.entries(glossary.abbreviations)) {
    if (!g.name || !g.plain) err(`${lang}/glossary`, `${ab}: needs name and plain explanation`);
    if (!tagAt.has(g.tag)) err(`${lang}/glossary`, `${ab}: tag "${g.tag}" is not introduced by any lesson`);
  }
  if (status) for (const l of syllabus.lessons) {
    const s = status.lessons[l.id]?.state;
    if (!s || !(STATES as readonly string[]).includes(s)) err(`${lang}/STATUS`, `${l.id}: missing or invalid state`);
  }

  const files = lessonFiles(dir);
  const lessons: Lesson[] = files.map(parseLesson);
  const seenHeadwords = new Map<string, string>();
  const byId = new Map(lessons.map((l) => [l.front.id, l]));
  for (const l of syllabus.lessons) {
    const s = status?.lessons[l.id]?.state;
    if (s && s !== "planned" && !byId.has(l.id)) err(`${lang}/STATUS`, `${l.id} is "${s}" but has no lesson file`);
    if (s === "planned" && byId.has(l.id)) warn(`${lang}/STATUS`, `${l.id} has a file but is still "planned"`);
  }

  let unverified16 = 0;
  for (const lesson of lessons) {
    const rel = path.relative(".", lesson.file);
    const f = lesson.front;
    const selected = onlyFiles.length === 0 || onlyFiles.includes(path.resolve(lesson.file));
    const E = (m: string) => { if (selected) err(rel, m); };
    const W = (m: string) => { if (selected) warn(rel, m); };
    if (lesson.frontError) { E(lesson.frontError); continue; }
    const syl = syllabus.lessons.find((x) => x.id === f.id);
    if (!syl) { E(`id "${f.id}" is not in syllabus.json`); continue; }
    const here = pos.get(syl.id)!;
    if (path.basename(lesson.file) !== lessonFileName(syl)) E(`file should be named ${lessonFileName(syl)}`);
    if (f.lang !== lang) E(`lang should be ${lang}`);
    if (f.part !== syl.part || f.order !== syl.order) E("part/order do not match syllabus");
    if (f.title !== syl.title) E(`title differs from syllabus ("${syl.title}")`);
    if (typeof f.point !== "string" || !f.point) E("point missing");
    if (JSON.stringify(f.requires ?? null) !== JSON.stringify(syl.requires)) E("requires differs from syllabus");
    if (JSON.stringify(f.introduces ?? null) !== JSON.stringify(syl.introduces)) E("introduces differs from syllabus");
    if (!(LABELS as readonly string[]).includes(f.confidence ?? "")) E(`confidence "${f.confidence}" is not a valid label`);
    if (!Array.isArray(f.sources) || f.sources.length === 0) E("sources missing");
    for (const s of f.sources ?? []) if (!sourceIds.has(s)) E(`source "${s}" is not in sources.json`);
    const raw = fs.readFileSync(lesson.file, "utf8");
    if (raw !== raw.normalize("NFC")) E("file is not Unicode NFC-normalised");
    if (/[‪-‮⁦-⁩]/.test(raw)) W("contains explicit bidi control characters");
    if (/<\/?[a-z][^>]*>/i.test(lesson.body.replace(/`[^`]*`/g, ""))) E("raw HTML is not allowed in lessons");

    const full = syl.part >= 1 && syl.part <= 7; // parts using the full lesson template
    const secs = sections(lesson.blocks);
    const names = secs.map((s) => s.name).filter(Boolean);
    if (full) {
      for (const r of REQUIRED) if (!names.includes(r)) E(`section "## ${r}" missing`);
      if (syl.part >= 2 && !names.includes("Where it applies")) E(`section "## Where it applies" missing (required from part 2)`);
      const known = names.filter((n) => TEMPLATE.includes(n));
      if (known.join("|") !== TEMPLATE.filter((t) => known.includes(t)).join("|")) E("template sections are out of order");
      for (const n of names) if (!TEMPLATE.includes(n)) W(`unexpected section "## ${n}"`);
    }

    // Blocks
    let nEx = 0, nVocab = 0;
    for (const b of lesson.blocks) {
      if (b.type === "rawtable") E(`line ${b.line}: table must be inside a :::table block with confidence and source`);
      if (b.type === "table") {
        if (!(LABELS as readonly string[]).includes(b.fields.confidence ?? "")) E(`line ${b.line}: table needs a valid confidence label`);
        if (!b.fields.source) E(`line ${b.line}: table needs a source`);
        if (!b.fields.caption) E(`line ${b.line}: table needs a caption`);
        if (b.rows.length === 0) E(`line ${b.line}: table has no rows`);
        for (const r of b.rows) if (r.length !== b.header.length) E(`line ${b.line}: table row has ${r.length} cells, header has ${b.header.length}`);
        if (b.fields.confidence === "unverified" && syl.part >= 1 && syl.part <= 6) unverified16++;
      }
      if (b.type === "vocab") {
        for (const bad of b.bad) E(`line ${b.line}: bad vocab line "${bad}" (headword | translit or - | part of speech | meaning | forms)`);
        for (const e of b.entries) {
          nVocab++;
          const prev = seenHeadwords.get(e.headword + "\u0000" + e.pos);
          if (prev && prev !== f.id) E(`line ${b.line}: "${e.headword}" (${e.pos}) was already introduced in ${prev}`);
          seenHeadwords.set(e.headword + "\u0000" + e.pos, f.id!);
          if (!translitOptional && !e.translit) E(`line ${b.line}: vocab "${e.headword}" needs a transliteration`);
        }
      }
      if (b.type !== "example") continue;
      nEx++;
      const x = b.fields;
      const at = `line ${b.line}`;
      for (const k of EXAMPLE_FIELDS) if (!x[k]) E(`${at}: example missing "${k}"`);
      if (!translitOptional && !x.translit) E(`${at}: example missing "translit"`);
      if (x.confidence && !(LABELS as readonly string[]).includes(x.confidence)) E(`${at}: confidence "${x.confidence}" is not a valid label`);
      if (x.confidence === "attested" && (!x.source || x.source === "constructed")) E(`${at}: attested example must cite work and passage`);
      if (x.confidence === "constructed" && x.source !== "constructed") E(`${at}: constructed example must have source: constructed`);
      if (x.source === "constructed" && x.confidence === "verified") E(`${at}: a constructed sentence takes the label constructed (or unverified), not verified`);
      if (x.confidence === "unverified" && syl.part >= 1 && syl.part <= 6) unverified16++;
      if (x.morphemes && x.gloss) {
        const mw = x.morphemes.split(/\s+/), gw = x.gloss.split(/\s+/);
        if (mw.length !== gw.length) E(`${at}: ${mw.length} words in morphemes but ${gw.length} in gloss`);
        else mw.forEach((w, i) => { if (splitWord(w).length !== splitWord(gw[i]).length) E(`${at}: "${w}" has ${splitWord(w).length} morphemes but gloss "${gw[i]}" has ${splitWord(gw[i]).length}`); });
        const preview = new Set((x.preview ?? "").split(/[,\s]+/).filter(Boolean));
        for (const ab of new Set(glossAbbreviations(x.gloss))) {
          const g = glossary.abbreviations[ab];
          if (!g) { E(`${at}: gloss abbreviation "${ab}" is not in glossary.json`); continue; }
          const intro = tagAt.get(g.tag);
          if (intro !== undefined && intro > here && !preview.has(ab))
            E(`${at}: gloss uses ${ab} (${g.name}) before it is taught in ${syllabus.lessons[intro].id}; teach it first or add "preview: ${ab}"`);
        }
      }
    }

    // Template counts
    const wc = wordCounts(lesson.blocks);
    if (syl.part === 9) { /* generated reference appendices: no prose minimum */ }
    else if (wc.prose < 400) E(`only ${wc.prose} prose words (minimum 400, target 500 to 1,200)`);
    else if (wc.prose < 500 || wc.prose > (syl.part >= 2 && syl.part <= 7 ? 1800 : 1200)) W(`${wc.prose} prose words (target 500 to ${syl.part >= 2 && syl.part <= 7 ? "1,800 for grammar lessons" : "1,200"})`);
    if (full) {
      const strict = syl.part >= 2;
      if (nEx < 6) (strict ? E : W)(`${nEx} examples (need 6 to 12)`);
      if (nEx > 12) W(`${nEx} examples (target 6 to 12)`);
      if (nVocab === 0) (strict ? E : W)("no :::vocab block");
      else if (strict && (nVocab < 15 || nVocab > 30)) W(`${nVocab} new words (target 15 to 30)`);
      const items = (name: string) => (secs.find((s) => s.name === name)?.blocks ?? []).reduce((n, b) => n + (b.type === "list" && b.ordered ? b.items.length : 0), 0);
      const nq = items("Exercises"), na = items("Worked answers");
      if (nq < 5 || nq > 10) E(`${nq} exercises (need 5 to 10, as a numbered list)`);
      if (na !== nq) E(`${nq} exercises but ${na} worked answers`);
    }
    const prose = lesson.blocks.filter((b) => b.type === "para").map((b) => (b as { text: string }).text).join(" ");
    for (const w of ["simply", "color", "analyze", "center", "behavior", "recognize", "organize", "memorize"]) if (new RegExp(`\\b${w}`, "i").test(prose)) W(`voice: found "${w}" (British spelling, no filler)`);
  }
  if (onlyFiles.length === 0) {
    const done = syllabus.lessons.filter((l) => status?.lessons[l.id]?.state === "done").length;
    if (unverified16 > 0 && done === syllabus.lessons.length) err(lang, `guide is marked done but has ${unverified16} unverified items in parts 1 to 6`);
    console.log(`${lang}: ${lessons.length}/${syllabus.lessons.length} lessons written, ${unverified16} unverified items in parts 1 to 6`);
  }
}
console.log(`${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
