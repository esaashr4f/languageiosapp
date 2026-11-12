// Renders lesson files to one self-contained HTML page, for reviewing content before the app exists.
// Usage: tsx tools/preview.ts <out.html> <lesson.md> [lesson.md ...]
import fs from "node:fs";
import path from "node:path";
import { parseLesson, readJson, type Block, type Glossary } from "./lib.ts";

const [out, ...files] = process.argv.slice(2);
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>");
const DOT: Record<string, string> = { verified: "#3fae6a", attested: "#4a8fe0", constructed: "#c9a227", uncertain: "#d9822b", unverified: "#d9534f" };

function glossPiece(p: string, g: Glossary) {
  return p.split(/([.])/).map((t) => (/^[123]?[A-Z][A-Z0-9]*$|^[123]$/.test(t) ? `<abbr title="${esc(t.replace(/^[123](?=[A-Z])/, (n) => n + " ").split(" ").map((x) => g.abbreviations[x] ? `${g.abbreviations[x].name}: ${g.abbreviations[x].plain}` : x).join("; "))}">${t}</abbr>` : esc(t))).join("");
}

function example(f: Record<string, string>, g: Glossary) {
  const mw = (f.morphemes ?? "").split(/\s+/), gw = (f.gloss ?? "").split(/\s+/);
  const words = mw.map((m, i) => `<span class="w"><span class="m">${esc(m)}</span><span class="g">${(gw[i] ?? "").split(/([-=])/).map((p) => (p === "-" || p === "=" ? p : glossPiece(p, g))).join("")}</span></span>`).join("");
  const label = f.confidence ?? "";
  return `<figure class="ex"><button class="dot" style="background:${DOT[label] ?? "#888"}" title="${esc(label)} · ${esc(f.source ?? "")}"></button>
<div class="orig">${esc(f.orig ?? "")}</div>${f.translit ? `<div class="tl">${esc(f.translit)}</div>` : ""}
<div class="il">${words}</div>${f.literal ? `<div class="lit">Literally: ${esc(f.literal)}</div>` : ""}
<div class="tr">${esc(f.translation ?? "")}</div><figcaption>${inline(f.note ?? "")}${f.preview ? ` <span class="pv">preview</span>` : ""}<span class="src">${esc(label)}${f.source && f.source !== label ? ` · ${esc(f.source)}` : ""}</span></figcaption></figure>`;
}

function render(blocks: Block[], g: Glossary) {
  return blocks.map((b) => {
    switch (b.type) {
      case "heading": return `<h${b.level + 1}>${inline(b.text)}</h${b.level + 1}>`;
      case "para": return `<p>${inline(b.text)}</p>`;
      case "list": return `<${b.ordered ? "ol" : "ul"}>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${b.ordered ? "ol" : "ul"}>`;
      case "example": return example(b.fields, g);
      case "table": return `<figure class="tbl"><figcaption>${inline(b.fields.caption ?? "")} <span class="src"><span class="d" style="background:${DOT[b.fields.confidence ?? ""] ?? "#888"}"></span>${esc(b.fields.confidence ?? "")} · ${esc(b.fields.source ?? "")}</span></figcaption><table><tr>${b.header.map((h) => `<th>${inline(h)}</th>`).join("")}</tr>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</table></figure>`;
      case "vocab": return `<dl class="vocab">${b.entries.map((e) => `<div><dt>${esc(e.headword)}</dt><dd><span class="pos">${esc(e.pos)}</span> ${esc(e.meaning)}${e.forms ? ` <span class="forms">${esc(e.forms)}</span>` : ""}</dd></div>`).join("")}</dl>`;
      default: return "";
    }
  }).join("\n");
}

const lessons = files.map((f) => {
  const l = parseLesson(f);
  const g = readJson<Glossary>(path.join(path.dirname(path.dirname(f)), "glossary.json")) ?? { abbreviations: {} };
  return `<article><div class="kicker">${esc(String(l.front.id))} · Part ${l.front.part}</div><h1>${inline(String(l.front.title))}</h1><p class="point">${inline(String(l.front.point))}</p>${render(l.blocks, g)}</article>`;
});

fs.writeFileSync(out, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Lesson preview</title>
<style>
:root{--bg:#111214;--fg:#e8e6e1;--mute:#9a978f;--card:#1b1c1f;--line:#2c2d31;--acc:#c9a26b}
@media (prefers-color-scheme:light){:root{--bg:#faf8f3;--fg:#22211e;--mute:#6f6c64;--card:#fff;--line:#e4e0d6;--acc:#8a6a2f}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.65 -apple-system,BlinkMacSystemFont,"Iowan Old Style",Georgia,serif;-webkit-text-size-adjust:100%}
article{max-width:680px;margin:0 auto;padding:28px 16px 64px;border-bottom:1px solid var(--line)}
.kicker{font:600 12px/1 -apple-system,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--acc)}
h1{font-size:30px;line-height:1.2;margin:.4em 0 .2em}.point{color:var(--mute);font-style:italic;margin-top:0}
h3{font:700 19px/1.3 -apple-system,system-ui,sans-serif;margin:2em 0 .5em}
.ex{position:relative;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 16px 12px;margin:14px 0}
.dot{position:absolute;top:14px;right:14px;width:10px;height:10px;border-radius:50%;border:0;padding:0}
.orig{font-size:22px;line-height:1.35;padding-right:20px}.tl{color:var(--mute)}
.il{display:flex;flex-wrap:wrap;gap:6px 16px;margin:10px 0 8px}.w{display:flex;flex-direction:column}
.m{font-style:italic}.g{font:13px/1.4 -apple-system,system-ui,sans-serif;color:var(--mute)}
abbr{text-decoration:none;font-variant:small-caps;text-transform:lowercase;letter-spacing:.03em;color:var(--fg)}
.lit{color:var(--mute);font-size:15px}.tr{font-weight:600}
figcaption{font:14px/1.45 -apple-system,system-ui,sans-serif;color:var(--mute);margin-top:8px}
.src{display:block;font-size:12px;opacity:.75;margin-top:4px}.pv{font-size:11px;border:1px solid var(--acc);color:var(--acc);border-radius:6px;padding:0 5px}
.tbl table{width:100%;border-collapse:collapse;font-size:15px}.tbl th,.tbl td{border-bottom:1px solid var(--line);padding:6px 8px;text-align:left}
.d{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:5px}
.vocab{display:grid;grid-template-columns:1fr;gap:4px;font-size:15px}.vocab div{display:flex;gap:10px;border-bottom:1px solid var(--line);padding:4px 0}
.vocab dt{font-weight:700;min-width:7em}.vocab dd{margin:0}.pos{color:var(--mute);font-size:13px}.forms{color:var(--mute);font-style:italic}
code{font-size:.9em}
</style></head><body>${lessons.join("\n")}</body></html>`);
console.log(`wrote ${out} (${files.length} lessons)`);
