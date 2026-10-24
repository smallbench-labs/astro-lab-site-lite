import type { L } from '../data/lab';
export const languages = { en: 'English', ja: '日本語', 'zh-TW': '繁體中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const en = {
  'nav.people': 'People', 'nav.publications': 'Publications', 'nav.projects': 'Projects', 'nav.news': 'News', 'nav.join': 'Join us', 'nav.contact': 'Contact',
  'home.selected': 'Selected publications', 'home.all': 'All publications', 'home.news': 'Latest news', 'home.allnews': 'All news', 'home.hiring': 'We are recruiting', 'home.positions': 'See open positions',
  'people.title': 'People', 'people.lead': 'The current group, and where our alumni went next.',
  'role.pi': 'Principal Investigator', 'role.postdoc': 'Postdoctoral Researchers', 'role.phd': 'PhD Students', 'role.ms': 'Master’s Students', 'role.ug': 'Undergraduates', 'people.alumni': 'Alumni', 'people.since': 'since', 'people.now': 'now',
  'pubs.title': 'Publications', 'pubs.lead': 'Generated from a single BibTeX file. Lab members are underlined.', 'pubs.bibtex': 'BibTeX', 'pubs.code': 'Code', 'pubs.pdf': 'PDF', 'pubs.doi': 'DOI', 'pubs.thesis': 'PhD thesis',
  'proj.title': 'Projects & grants', 'proj.lead': 'Long-running field projects and the funders who make them possible.', 'proj.active': 'Active', 'proj.completed': 'Completed', 'proj.papers': 'papers', 'proj.grants': 'Grants',
  'g.funder': 'Funder', 'g.id': 'Award', 'g.period': 'Period', 'g.amount': 'Amount', 'g.project': 'Project',
  'join.title': 'Join the lab', 'join.lead': 'We hire for curiosity and care in the field. Prior ocean experience is not required.', 'join.open': 'Open positions', 'join.deadline': 'Apply by', 'join.funded': 'Fully funded', 'join.unfunded': 'Stipend varies',
  'join.how': 'How to apply', 'join.how1': 'Email a CV and one page on a problem you want to work on.', 'join.how2': 'Use the subject line “[Halden] Position title — Your name”.', 'join.how3': 'We reply to every application within three weeks.',
  'join.values': 'What to expect', 'join.v1': 'Two field trips a year, fully covered.', 'join.v2': 'Weekly one-to-one meetings and a written mentoring plan.', 'join.v3': 'Open-source code and open-access papers by default.',
  'news.title': 'News', 'news.lead': 'Papers, awards, field seasons and people.',
  'contact.title': 'Contact', 'contact.lead': 'Prospective students: please read the Join page first.', 'contact.email': 'Email', 'contact.address': 'Address', 'contact.visit': 'Visiting',
  'contact.visitd': 'Seminars are open to the public, Thursdays 15:00 in Marlowe 4.20.',
  'theme.toggle': 'Toggle dark mode', 'skip': 'Skip to content', 'footer.note': 'Sample content — all people and works are fictional.', 'lang': 'Language',
};
type Dict = typeof en;
const ja: Dict = {
  ...en,
  'nav.people': 'メンバー', 'nav.publications': '業績', 'nav.projects': 'プロジェクト', 'nav.news': 'ニュース', 'nav.join': '募集', 'nav.contact': 'アクセス',
  'home.selected': '主要論文', 'home.all': 'すべての業績', 'home.news': '最新ニュース', 'home.allnews': 'ニュース一覧', 'home.hiring': 'メンバー募集中', 'home.positions': '募集ポジションを見る',
  'people.title': 'メンバー', 'people.lead': '現在のメンバーと、修了生のその後。',
  'role.pi': '研究代表者', 'role.postdoc': 'ポスドク研究員', 'role.phd': '博士課程', 'role.ms': '修士課程', 'role.ug': '学部生', 'people.alumni': '修了生・OB/OG', 'people.since': '在籍', 'people.now': '現在',
  'pubs.title': '業績', 'pubs.lead': '1つの BibTeX ファイルから自動生成。研究室メンバーに下線。', 'pubs.thesis': '博士論文',
  'proj.title': 'プロジェクトと研究費', 'proj.lead': '長期フィールドプロジェクトと、それを支える助成機関。', 'proj.active': '進行中', 'proj.completed': '終了', 'proj.papers': '本の論文', 'proj.grants': '研究費',
  'g.funder': '助成機関', 'g.id': '課題番号', 'g.period': '期間', 'g.amount': '金額', 'g.project': 'プロジェクト',
  'join.title': '研究室への参加', 'join.lead': '好奇心とフィールドでの丁寧さを重視します。海洋分野の経験は不要です。', 'join.open': '募集中のポジション', 'join.deadline': '締切', 'join.funded': '全額支援', 'join.unfunded': '支給額は応相談',
  'join.how': '応募方法', 'join.how1': '履歴書と、取り組みたい課題について1ページの文書をメールで送ってください。', 'join.how2': '件名は「[Halden] ポジション名 — 氏名」としてください。', 'join.how3': 'すべての応募に3週間以内に返信します。',
  'join.values': '研究室での生活', 'join.v1': '年2回のフィールド調査（費用全額負担）。', 'join.v2': '毎週の個別面談と、文書化された指導計画。', 'join.v3': 'コードはオープンソース、論文はオープンアクセスが原則。',
  'news.title': 'ニュース', 'news.lead': '論文、受賞、フィールド調査、メンバーの話題。',
  'contact.title': 'アクセス', 'contact.lead': '進学希望の方は、まず「募集」ページをご覧ください。', 'contact.email': 'メール', 'contact.address': '所在地', 'contact.visit': '見学',
  'contact.visitd': 'セミナーは毎週木曜 15:00、マーロウ館 4.20 で公開しています。',
  'theme.toggle': 'ダークモード切替', 'skip': '本文へスキップ', 'footer.note': 'サンプル内容 — 人物・業績はすべて架空です。', 'lang': '言語',
};
const zhTW: Dict = {
  ...en,
  'nav.people': '成員', 'nav.publications': '論文', 'nav.projects': '計畫', 'nav.news': '最新消息', 'nav.join': '招生', 'nav.contact': '聯絡',
  'home.selected': '代表論文', 'home.all': '所有論文', 'home.news': '最新消息', 'home.allnews': '所有消息', 'home.hiring': '招募中', 'home.positions': '查看職缺',
  'people.title': '成員', 'people.lead': '現任成員，以及畢業校友的去向。',
  'role.pi': '主持人', 'role.postdoc': '博士後研究員', 'role.phd': '博士生', 'role.ms': '碩士生', 'role.ug': '大學部學生', 'people.alumni': '校友', 'people.since': '加入於', 'people.now': '現職',
  'pubs.title': '論文發表', 'pubs.lead': '由單一 BibTeX 檔自動產生。實驗室成員以底線標示。', 'pubs.thesis': '博士論文',
  'proj.title': '研究計畫與經費', 'proj.lead': '長期野外研究計畫，以及支持我們的資助單位。', 'proj.active': '進行中', 'proj.completed': '已結案', 'proj.papers': '篇論文', 'proj.grants': '經費',
  'g.funder': '資助單位', 'g.id': '計畫編號', 'g.period': '期間', 'g.amount': '金額', 'g.project': '計畫',
  'join.title': '加入實驗室', 'join.lead': '我們看重好奇心與野外工作的細心。不需要海洋相關經驗。', 'join.open': '開放職缺', 'join.deadline': '截止', 'join.funded': '全額補助', 'join.unfunded': '津貼另議',
  'join.how': '申請方式', 'join.how1': '寄送履歷，以及一頁說明你想研究的問題。', 'join.how2': '信件主旨請寫「[Halden] 職缺名稱 — 你的名字」。', 'join.how3': '每一封申請都會在三週內回覆。',
  'join.values': '在這裡的日常', 'join.v1': '每年兩次野外調查，費用全額支付。', 'join.v2': '每週一對一會談，並有書面指導計畫。', 'join.v3': '程式碼預設開源、論文預設開放取用。',
  'news.title': '最新消息', 'news.lead': '論文、獲獎、野外季與成員動態。',
  'contact.title': '聯絡我們', 'contact.lead': '有意申請的同學，請先閱讀「招生」頁。', 'contact.email': '電子郵件', 'contact.address': '地址', 'contact.visit': '參訪',
  'contact.visitd': '每週四 15:00 在 Marlowe 4.20 舉辦公開演講。',
  'theme.toggle': '切換深色模式', 'skip': '跳到主要內容', 'footer.note': '範例內容 — 所有人物與著作皆為虛構。', 'lang': '語言',
};
export const ui: Partial<Record<Lang, Dict>> & { en: Dict } = { en, ja, 'zh-TW': zhTW };
export type UIKey = keyof Dict;
export const useT = (lang: Lang) => (k: UIKey) => (ui[lang] ?? ui.en)[k] ?? en[k];
export const tl = (lang: Lang, v: L) => (v as Record<string, string | undefined>)[lang] ?? v.en;
export function localePath(lang: Lang, path = '/') { const p = path.startsWith('/') ? path : `/${path}`; return lang === defaultLang ? p : `/${lang}${p}`; }
export const langPaths = () => (Object.keys(languages) as Lang[]).map((l) => ({ params: { lang: l === defaultLang ? undefined : l }, props: { lang: l } }));
export const fmtDate = (lang: Lang, d: Date) => d.toLocaleDateString(lang, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
