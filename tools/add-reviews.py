#!/usr/bin/env python3
"""Add review lessons to a syllabus: one at the end of each part 2-7, plus one at the midpoint
of any part with more than 12 lessons none of which are written yet. Idempotent.
Usage: python3 tools/add-reviews.py <code> [<code> ...]"""
import json, os, sys

def renumber(code, lessons):
    out, cnt, idmap = [], {}, {}
    for l in lessons:
        cnt[l["part"]] = cnt.get(l["part"], 0) + 1
        new = f"{code}-{l['part']:02d}-{cnt[l['part']]:02d}"
        if l.get("id"): idmap[l["id"]] = new
        l["order"] = cnt[l["part"]]; out.append((l, new))
    for l, new in out: l["id"] = new
    for l, _ in out: l["requires"] = [idmap.get(r, r) for r in l["requires"]]
    return idmap

for code in sys.argv[1:]:
    d = f"content/{code}"
    syl = json.load(open(f"{d}/syllabus.json", encoding="utf8"))
    st = json.load(open(f"{d}/STATUS.json"))
    written = {f.split("-")[0] for f in os.listdir(f"{d}/lessons")} if os.path.isdir(f"{d}/lessons") else set()
    L = syl["lessons"]; new = []
    for p in range(2, 8):
        part = [l for l in L if l["part"] == p]
        if not part: continue
        mid_needed = len(part) > 12 and f"{p:02d}" not in written and not any(l.get("review") for l in part)
        for i, l in enumerate(part):
            new.append(l)
            if mid_needed and i == len(part) // 2 - 1:
                new.append({"id": None, "part": p, "order": 0, "slug": "review-midway", "title": "Review: putting it together so far",
                            "point": "Translate, build and correct sentences using everything taught up to here", "requires": [l["id"]] if l["id"] else [], "introduces": [], "review": True})
        if not any(l.get("review") and l["slug"] == "review" for l in part):
            new.append({"id": None, "part": p, "order": 0, "slug": "review", "title": f"Review: part {p} as a whole",
                        "point": "Translate a passage and build and correct sentences using everything taught so far", "requires": [part[-1]["id"]], "introduces": [], "review": True})
    rest_before = [l for l in L if l["part"] < 2]; rest_after = [l for l in L if l["part"] > 7]
    allL = rest_before + new + rest_after
    # midway review requires the lesson before it; fill None requires after renumbering
    idmap = renumber(code, allL)
    for i, l in enumerate(allL):
        if l.get("review") and not l["requires"] and i > 0: l["requires"] = [allL[i - 1]["id"]]
    syl["lessons"] = allL
    states = {idmap.get(k, k): v for k, v in st["lessons"].items()}
    st["lessons"] = {l["id"]: states.get(l["id"], {"state": "planned"}) for l in allL}
    # file renames for already-written lessons whose ids changed (should not happen: we only insert in unwritten parts)
    for old, nw in idmap.items():
        assert old == nw or old.split("-")[1] not in written, f"{code}: would renumber written lesson {old}"
    json.dump(syl, open(f"{d}/syllabus.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
    json.dump(st, open(f"{d}/STATUS.json", "w"), indent=1)
    print(code, len(allL), "lessons,", sum(1 for l in allL if l.get("review")), "reviews")
