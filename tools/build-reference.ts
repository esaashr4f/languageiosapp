// Generates content/<code>/vocab.json from the :::vocab blocks of the lesson files.
// Usage: tsx tools/build-reference.ts [--root content] [lang ...]
import fs from "node:fs";
import path from "node:path";
import { args, langDirs, lessonFiles, parseLesson, readJson, type Syllabus } from "./lib.ts";

const a = args();
const root = a.flag("--root") ?? "content";
for (const lang of langDirs(root, a.rest())) {
  const dir = path.join(root, lang);
  const syllabus = readJson<Syllabus>(path.join(dir, "syllabus.json"));
  if (!syllabus) continue;
  const order = new Map(syllabus.lessons.map((l, i) => [l.id, i]));
  const words: Record<string, string>[] = [];
  const lessons = lessonFiles(dir).map(parseLesson).filter((l) => order.has(l.front.id ?? "")).sort((x, y) => order.get(x.front.id!)! - order.get(y.front.id!)!);
  for (const l of lessons)
    for (const b of l.blocks)
      if (b.type === "vocab")
        for (const e of b.entries)
          words.push({ headword: e.headword, translit: e.translit, pos: e.pos, meaning: e.meaning, forms: e.forms, first_lesson: l.front.id!, confidence: l.front.confidence ?? "unverified" });
  fs.writeFileSync(path.join(dir, "vocab.json"), JSON.stringify({ generated_from: "lesson :::vocab blocks by tools/build-reference.ts; do not edit by hand", count: words.length, words }, null, 1) + "\n");
  console.log(`${lang}: ${words.length} words`);
}
