export interface CategoryItem {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: CategoryItem[] = [
  {
    slug: 'tutorials',
    name: '代理科普内容',
    description: '从零讲清楚代理IP、协议区别、客户端分流和避坑常识，不说玄学只讲人话。',
    icon: 'book',
  },
  {
    slug: 'reviews',
    name: '2026外网加速器推荐',
    description: '围绕晚高峰测速、流媒体解锁、跨境办公稳定性整理的实测推荐。',
    icon: 'check-circle',
  },
  {
    slug: 'comparisons',
    name: '飞机场横向对比',
    description: '把光年梯、极连云、快狸、速界、可信云、边缘节点放在同一张表里硬碰硬对比。',
    icon: 'columns',
  },
  {
    slug: 'guides',
    name: '外网跨境指南',
    description: '针对跨境电商、海外开发、AI 工具访问与日常上网的实用排障与选型建议。',
    icon: 'help-circle',
  },
];

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return categories.find((c) => c.slug === slug);
}
