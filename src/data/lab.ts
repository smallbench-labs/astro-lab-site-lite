// All people, institutions, funders and numbers below are fictional sample content.
export type L = { en: string; ja?: string; 'zh-TW'?: string };

export const lab = {
  name: { en: 'Halden Lab', ja: 'ハルデン研究室', 'zh-TW': 'Halden 實驗室' } as L,
  full: { en: 'Coastal Sensing & Learning Group', ja: '沿岸センシング・学習グループ', 'zh-TW': '海岸感測與學習研究群' } as L,
  dept: { en: 'School of Computing · Kestrel Bay University', ja: 'ケストレル湾大学 計算科学部', 'zh-TW': 'Kestrel Bay 大學 計算學院' } as L,
  mission: {
    en: 'We build sensors that live for years on wind and tide, and the learning systems that make sense of what they hear. Our field sites are mangroves, seagrass meadows and reef flats.',
    ja: '風と潮の力で何年も動き続けるセンサーと、それが捉えたものを理解する学習システムを作っています。調査地はマングローブ林、海草藻場、リーフフラットです。',
    'zh-TW': '我們打造只靠風與潮汐就能運作數年的感測器，以及理解它們所聽見之聲的學習系統。研究場域是紅樹林、海草床與礁台。',
  } as L,
  email: 'halden-lab@example.edu',
  address: { en: 'Room 4.12, Marlowe Building, 200 Harbour Road, Kestrel Bay', ja: 'ケストレル湾 ハーバー通り200 マーロウ館 4.12号室', 'zh-TW': 'Kestrel Bay 港灣路 200 號 Marlowe 大樓 4.12 室' } as L,
  /** Exact author-name strings (as rendered by the BibTeX parser) that should be linked to members. */
};

export type Role = 'pi' | 'postdoc' | 'phd' | 'ms' | 'ug';
export interface Member { id: string; name: string; native?: string; role: Role; topic: L; initials: string; since: number; email?: string }
export const members: Member[] = [
  { id: 'okafor-lin', name: 'Mireille Okafor-Lin', role: 'pi', initials: 'MO', since: 2017, email: 'm.okaforlin@example.edu',
    topic: { en: 'Associate Professor. Energy-harvesting systems, intermittent computing.', ja: '准教授。環境発電システム、間欠コンピューティング。', 'zh-TW': '副教授。能量採集系統、間歇式運算。' } },
  { id: 'lindqvist', name: 'Elin Lindqvist', role: 'postdoc', initials: 'EL', since: 2024, topic: { en: 'Physics-informed calibration of drifting sensors.', ja: '物理知識を用いたドリフトするセンサーの較正。', 'zh-TW': '以物理先驗校正漂移的感測器。' } },
  { id: 'chen', name: 'Wei-Ting Chen', native: '陳威廷', role: 'phd', initials: 'WC', since: 2021, topic: { en: 'Mesh networking under extreme weather.', ja: '極端気象下でのメッシュネットワーク。', 'zh-TW': '極端天候下的網狀網路。' } },
  { id: 'sato', name: 'Haruka Sato', native: '佐藤 遥', role: 'phd', initials: 'HS', since: 2022, topic: { en: 'Multi-scale remote sensing of seagrass.', ja: '海草藻場のマルチスケール・リモートセンシング。', 'zh-TW': '海草床的多尺度遙測。' } },
  { id: 'rahman', name: 'Idris Rahman', role: 'phd', initials: 'IR', since: 2023, topic: { en: 'TinyML for underwater bioacoustics.', ja: '水中生物音響のための TinyML。', 'zh-TW': '水下生物聲學的 TinyML。' } },
  { id: 'huang', name: 'Yu-Chen Huang', native: '黃郁蓁', role: 'ms', initials: 'YH', since: 2025, topic: { en: 'Low-cost turbidity sensing.', ja: '低コスト濁度センシング。', 'zh-TW': '低成本濁度感測。' } },
  { id: 'osei', name: 'Kwame Osei', role: 'ug', initials: 'KO', since: 2026, topic: { en: 'Field deployment tooling.', ja: 'フィールド展開用ツール。', 'zh-TW': '野外布署工具。' } },
];
export const alumni = [
  { name: 'Julien Moreau', degree: 'PhD 2024', now: { en: 'Research Scientist, Fictional Ocean Institute', ja: '架空海洋研究所 研究員', 'zh-TW': '虛構海洋研究所 研究員' } as L },
  { name: 'Aiko Tanaka', degree: 'MS 2023', now: { en: 'Firmware Engineer, Example Robotics', ja: 'Example Robotics ファームウェアエンジニア', 'zh-TW': 'Example Robotics 韌體工程師' } as L },
  { name: 'Daniel Ruiz', degree: 'Postdoc 2019–22', now: { en: 'Assistant Professor, Northgate University', ja: 'ノースゲート大学 助教', 'zh-TW': 'Northgate 大學 助理教授' } as L },
];

export const projects = [
  { id: 'tidenet', title: { en: 'TideNet', ja: 'TideNet', 'zh-TW': 'TideNet' } as L, years: '2023–', status: 'active',
    summary: { en: 'Self-powered sensor meshes that keep reporting through storms, with 400+ node-years in the field.', ja: '嵐の中でも報告を続ける自己給電型センサーメッシュ。現場稼働 400 ノード年以上。', 'zh-TW': '暴風中仍持續回報的自供電感測網，野外累計超過 400 節點年。' } as L },
  { id: 'seagrass', title: { en: 'Seagrass Census', ja: '海草センサス', 'zh-TW': '海草普查' } as L, years: '2024–', status: 'active',
    summary: { en: 'A shared benchmark linking satellite, drone and diver counts of seagrass meadows.', ja: '衛星・ドローン・ダイバーによる海草藻場の計数をつなぐ共有ベンチマーク。', 'zh-TW': '串連衛星、無人機與潛水員海草計數的共享基準資料集。' } as L },
  { id: 'reefsound', title: { en: 'ReefSound', ja: 'ReefSound', 'zh-TW': 'ReefSound' } as L, years: '2022–2025', status: 'completed',
    summary: { en: 'On-device classification of reef fish choruses to track recovery after bleaching.', ja: '白化後の回復を追跡するための、サンゴ礁魚類コーラスの端末上分類。', 'zh-TW': '在裝置端分類礁魚合唱聲，追蹤白化後的復原。' } as L },
];
export const grants = [
  { funder: 'National Science Foundation of Example (NSFE)', id: 'CNS-2601234', period: '2026–2030', amount: 'US$ 1,200,000', project: 'tidenet' },
  { funder: 'Blue Coast Philanthropic Fund', id: 'BCPF-24-077', period: '2024–2027', amount: 'US$ 340,000', project: 'seagrass' },
  { funder: 'Kestrel Bay University Seed Grant', id: 'KBU-SG-22-09', period: '2022–2024', amount: 'US$ 60,000', project: 'reefsound' },
];
export const positions = [
  { title: { en: 'PhD student — embedded ML for bioacoustics', ja: '博士課程学生 — 生物音響のための組込み ML', 'zh-TW': '博士生 — 生物聲學嵌入式機器學習' } as L, deadline: '2026-12-15', funded: true },
  { title: { en: 'Postdoctoral researcher — sensor networks', ja: 'ポスドク研究員 — センサーネットワーク', 'zh-TW': '博士後研究員 — 感測網路' } as L, deadline: '2027-01-31', funded: true },
  { title: { en: 'Undergraduate research assistant (summer)', ja: '学部生リサーチアシスタント（夏季）', 'zh-TW': '大學部研究助理（暑期）' } as L, deadline: '2027-03-01', funded: false },
];
