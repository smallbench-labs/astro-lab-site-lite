// Tiny build-time BibTeX parser. Runs only during `astro build` — ships zero JS.
export interface BibEntry { type: string; key: string; fields: Record<string, string>; raw: string }

// Full LaTeX → Unicode conversion for accents and special letters found in DBLP / Scholar / Zotero exports.
const ACCENT: Record<string, string> = { "'": '\u0301', '`': '\u0300', '^': '\u0302', '"': '\u0308', '~': '\u0303', '=': '\u0304', '.': '\u0307', u: '\u0306', v: '\u030C', H: '\u030B', c: '\u0327', k: '\u0328', r: '\u030A', d: '\u0323', b: '\u0331' };
const SPECIAL: Record<string, string> = { o: 'ø', O: 'Ø', aa: 'å', AA: 'Å', ae: 'æ', AE: 'Æ', oe: 'œ', OE: 'Œ', ss: 'ß', l: 'ł', L: 'Ł', i: 'ı', j: 'ȷ', dh: 'ð', DH: 'Ð', th: 'þ', TH: 'Þ', ng: 'ŋ', NG: 'Ŋ' };
const base = (ch: string) => (ch === '\\i' ? 'i' : ch === '\\j' ? 'j' : ch);
export const clean = (s: string) => s
  .replace(/\\(['`^"~=.])\s*\{?\s*(\\i|\\j|[A-Za-z])(?:\s*\})?/g, (_, a: string, ch: string) => base(ch) + ACCENT[a])
  .replace(/\\([uvHckrdb])(?:\s+|\s*\{\s*)(\\i|\\j|[A-Za-z])(?:\s*\})?/g, (_, a: string, ch: string) => base(ch) + ACCENT[a])
  .replace(/\\(aa|AA|ae|AE|oe|OE|ss|dh|DH|th|TH|ng|NG|o|O|l|L|i|j)(?![A-Za-z])(?:\{\}|\s)?/g, (_, c: string) => SPECIAL[c])
  .replace(/\\([&%$_#])/g, '$1')
  .replace(/---/g, '—').replace(/--/g, '–').replace(/(?<!\\)~/g, '\u00A0')
  .replace(/[{}]/g, '').normalize('NFC').replace(/\s+/g, ' ').trim();

export function parseBibtex(src: string): BibEntry[] {
  const out: BibEntry[] = [];
  let i = 0;
  while ((i = src.indexOf('@', i)) !== -1) {
    const open = src.indexOf('{', i);
    if (open === -1) break;
    const type = src.slice(i + 1, open).trim().toLowerCase();
    let depth = 0, j = open;
    for (; j < src.length; j++) { if (src[j] === '{') depth++; else if (src[j] === '}' && --depth === 0) break; }
    const body = src.slice(open + 1, j);
    const raw = src.slice(i, j + 1);
    i = j + 1;
    if (type === 'comment' || type === 'string' || type === 'preamble') continue;
    const comma = body.indexOf(',');
    const key = body.slice(0, comma).trim();
    const fields: Record<string, string> = {};
    let k = comma + 1;
    while (k < body.length) {
      const eq = body.indexOf('=', k);
      if (eq === -1) break;
      const name = body.slice(k, eq).replace(/[\s,]/g, '').toLowerCase();
      let v = eq + 1;
      while (/\s/.test(body[v])) v++;
      let value = '';
      if (body[v] === '{') { let d = 0, e = v; for (; e < body.length; e++) { if (body[e] === '{') d++; else if (body[e] === '}' && --d === 0) break; } value = body.slice(v + 1, e); k = e + 1; }
      else if (body[v] === '"') { const e = body.indexOf('"', v + 1); value = body.slice(v + 1, e); k = e + 1; }
      else { const e = body.slice(v).search(/[,\n]/); value = body.slice(v, e === -1 ? undefined : v + e); k = e === -1 ? body.length : v + e; }
      fields[name] = value.trim();
    }
    out.push({ type, key, fields, raw: raw.trim() });
  }
  return out;
}

/** "Lin, Mei and Okafor, Ada" -> ["Mei Lin", "Ada Okafor"] */
export const authors = (s = '') => s.split(/\s+and\s+/).map((a) => { const c = clean(a); const [last, first] = c.split(',').map((x) => x.trim()); return first ? `${first} ${last}` : last; });
