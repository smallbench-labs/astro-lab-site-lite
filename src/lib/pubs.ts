import bib from '../data/publications.bib?raw';
import { parseBibtex, clean, authors } from './bibtex';
import { members } from '../data/lab';

export interface Pub { key: string; type: string; title: string; authors: { name: string; member: boolean }[]; venue: string; year: number; doi?: string; pdf?: string; code?: string; award?: string; project?: string; selected: boolean; raw: string }
const memberNames = new Set(members.map((m) => m.name));
const CUSTOM = /^\s*(pdf|code|award|project|selected)\s*=.*\n?/gim;

export const publications: Pub[] = parseBibtex(bib).map((e) => {
  const f = e.fields;
  return {
    key: e.key, type: e.type, title: clean(f.title ?? ''),
    authors: authors(f.author).map((name) => ({ name, member: memberNames.has(name) })),
    venue: clean(f.booktitle ?? f.journal ?? f.school ?? f.publisher ?? '') + (f.volume ? `, ${f.volume}${f.number ? `(${f.number})` : ''}` : '') + (f.pages ? `: ${clean(f.pages)}` : ''),
    year: Number(f.year), doi: f.doi, pdf: f.pdf, code: f.code, award: f.award ? clean(f.award) : undefined, project: f.project,
    selected: f.selected === 'true', raw: e.raw.replace(CUSTOM, '').replace(/,(\s*})$/, '$1'),
  };
}).sort((a, b) => b.year - a.year);

export const byYear = () => Object.entries(Object.groupBy(publications, (p) => String(p.year))).sort(([a], [b]) => +b - +a) as [string, Pub[]][];
