export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavZone {
  id: string;
  zoneLabel: string;
  colorClass: string;
  items: NavItem[];
}

// 顶部导航栏严格划分为三大内容区域
export const navZones: NavZone[] = [
  {
    id: 'zone-nav',
    zoneLabel: '一 · 机场导航',
    colorClass: 'from-indigo-500 to-cyan-500',
    items: [
      { label: '2026飞机场导航', href: '/#rankings', badge: 'HOT' },
      { label: '2026加速梯子', href: '/topics/2026-jichang-nav/' },
      { label: '代理梯子加速器', href: '/compare/' },
    ],
  },
  {
    id: 'zone-crossborder',
    zoneLabel: '二 · 跨境指南',
    colorClass: 'from-orange-500 to-pink-500',
    items: [
      { label: '外网跨境指南', href: '/blog/cross-border-accelerator-2026/' },
      { label: '2026外网加速器推荐', href: '/category/reviews/' },
      { label: 'AI 工具导航 2026', href: '/ai-tools/', badge: 'NEW' },
    ],
  },
  {
    id: 'zone-proxy',
    zoneLabel: '三 · 代理科普',
    colorClass: 'from-emerald-500 to-teal-500',
    items: [
      { label: '代理推荐', href: '/brands/' },
      { label: '代理科普内容', href: '/blog/proxy-ip-basics/' },
      { label: 'FAQ 问答百科', href: '/faq/', badge: '全量' },
    ],
  },
];

export const headerNav: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '2026机场榜', href: '/#rankings' },
  { label: '跨境指南', href: '/category/reviews/' },
  { label: '代理科普', href: '/category/tutorials/' },
  { label: '对比中心', href: '/compare/' },
  { label: '品牌库', href: '/brands/' },
];

export const headerCta = {
  label: '光年梯直达',
  href: '/brands/guangnianti/',
};

export const footerNav = {
  categories: [
    { label: '代理科普教程', href: '/category/tutorials/' },
    { label: '2026外网加速器评测', href: '/category/reviews/' },
    { label: '机场横向对比', href: '/category/comparisons/' },
    { label: '跨境避坑问答', href: '/category/guides/' },
  ],
  pages: [
    { label: '2026飞机场导航', href: '/#rankings' },
    { label: '光年梯档案', href: '/brands/guangnianti/' },
    { label: '全部实测文章', href: '/blog/' },
    { label: '内容专题聚合', href: '/topics/' },
    { label: '机场横向对比表', href: '/compare/' },
    { label: 'AI 工具导航', href: '/ai-tools/' },
    { label: 'FAQ 问答百科', href: '/faq/' },
  ],
};
