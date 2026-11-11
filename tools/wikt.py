#!/usr/bin/env python3
"""Print the inflection tables (and headword line) of a Wiktionary entry for one language.

Usage: python3 tools/wikt.py <word> [Language]     e.g. python3 tools/wikt.py rex Latin
Used by verification passes to check forms against en.wiktionary.org. Enter the word without macrons.
Results are cached in .cache/wikt/ so repeated checks do not hit the site.
"""
import html, os, re, sys, time, urllib.parse, urllib.request

def fetch(word):
    cache = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".cache", "wikt")
    os.makedirs(cache, exist_ok=True)
    f = os.path.join(cache, urllib.parse.quote(word, safe="") + ".html")
    if os.path.exists(f):
        return open(f, encoding="utf8").read()
    url = "https://en.wiktionary.org/wiki/" + urllib.parse.quote(word)
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; grammar-checker)"})
            t = urllib.request.urlopen(req, timeout=30).read().decode("utf8")
            open(f, "w", encoding="utf8").write(t)
            return t
        except Exception as e:  # rate limits and transient errors: back off and retry
            if "404" in str(e):
                return ""
            time.sleep(2 ** (attempt + 1))
    return ""

def text(s):
    s = re.sub(r"<style.*?</style>", "", s, flags=re.S)
    return re.sub(r"[ \t]+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s))).strip()

def main():
    word = sys.argv[1]
    lang = sys.argv[2] if len(sys.argv) > 2 else "Latin"
    t = fetch(word)
    m = re.search(r'<h2 id="%s"' % re.escape(lang.replace(" ", "_")), t)
    if not m:
        print(f"no {lang} entry for {word}")
        return 1
    sec = t[m.start():]
    nxt = re.search(r'<h2 id="', sec[10:])
    sec = sec[: nxt.start() + 10] if nxt else sec
    for hw in re.findall(r'<span class="headword-line">(.*?)</p>', sec, flags=re.S):
        print("HEADWORD:", text(hw))
    for tb in re.findall(r"<table[^>]*inflection-table.*?</table>", sec, flags=re.S):
        print("TABLE:")
        for row in re.findall(r"<tr.*?</tr>", tb, flags=re.S):
            cells = [text(c) for c in re.findall(r"<t[hd][^>]*>(.*?)</t[hd]>", row, flags=re.S)]
            if any(cells):
                print("  " + " | ".join(cells))
    return 0

if __name__ == "__main__":
    sys.exit(main())
