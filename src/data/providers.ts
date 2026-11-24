export interface AirportProvider {
  rank: number;
  id: string;
  name: string;
  aliases: string[];
  badge: string;
  categoryTag: 'stable' | 'value' | 'iplc';
  categoryLabel: string;
  score: string;
  latency: string;
  protocol: string;
  priceHint: string;
  coupon: string;
  summary: string;
  highlights: string[];
  detailHref: string;
  goHref: string;
  featured?: boolean;
}

export const airportProviders: AirportProvider[] = [
  {
    rank: 1,
    id: 'guangnianti',
    name: '光年梯',
    aliases: ['光年梯VPN', '光年梯机场', '光年梯IP'],
    badge: '2026 综合榜首 · 主力首选',
    categoryTag: 'iplc',
    categoryLabel: '专线主力',
    score: '9.8',
    latency: '28ms (港/日/新)',
    protocol: 'Trojan / Shadowsocks / 专线',
    priceHint: '13元/月 · 120G流量',
    coupon: 'GNT80',
    summary:
      '老牌稳健路线代表，晚高峰 4K 流媒体与跨境办公表现都很稳。支持光年梯VPN全平台客户端与纯净光年梯IP节点，适合拿来当长期主力。',
    highlights: ['晚高峰不掉速', '原生纯净IP解锁', '全端一键导入', 'AI/跨境办公友好'],
    detailHref: '/blog/guangnianti-review-2026/',
    goHref: 'https://gnt001.gntvipaff.cc/#/?code=FRrxGbbY',
    featured: true,
  },
  {
    rank: 2,
    id: 'jilianyun',
    name: '极连云',
    aliases: ['极连云机场', '极连云加速'],
    badge: '多地区覆盖 · 稳定梯队',
    categoryTag: 'stable',
    categoryLabel: '稳定主力',
    score: '9.4',
    latency: '34ms (亚太优先)',
    protocol: 'V2Ray / Trojan',
    priceHint: '15元/月 · 120G流量',
    coupon: 'JLY888',
    summary:
      '节点分布广、切线快，日韩美新港都有多条备用线路。平时刷视频、查资料或者多设备同时在线都很顺手，属于买完基本不用折腾的类型。',
    highlights: ['亚太节点充足', '多设备并发稳', '流媒体解锁全'],
    detailHref: '/blog/jilianyun-review-2026/',
    goHref: 'https://haozevpn02.jlyvipaff.com/#/?code=6aTAi9bW',
  },
  {
    rank: 3,
    id: 'kuaili',
    name: '快狸',
    aliases: ['快狸机场', '快狸加速器'],
    badge: '轻快响应 · 性价比高',
    categoryTag: 'value',
    categoryLabel: '性价比',
    score: '9.1',
    latency: '39ms (多线中转)',
    protocol: 'Shadowsocks / Hysteria2',
    priceHint: '入门友好 · 流量充裕',
    coupon: 'kl888',
    summary:
      '主打轻快和大流量包，对学生党和日常刷剧、看油管 1080P/4K 的用户很友好。Hysteria2 协议在弱网环境下提速明显。',
    highlights: ['大流量性价比', '弱网提速明显', '新手易上手'],
    detailHref: '/blog/kuaili-review-2026/',
    goHref: 'https://aolaiyun01.kuailiaff.com/#/?code=AFR8PsiY',
  },
  {
    rank: 4,
    id: 'sujie',
    name: '速界',
    aliases: ['速界机场', '速界加速'],
    badge: '跨境办公 · 低抖动',
    categoryTag: 'iplc',
    categoryLabel: '专线主力',
    score: '8.9',
    latency: '36ms (跨境优化)',
    protocol: 'Trojan / IEPL 入口',
    priceHint: '中档定位 · 跨境专线',
    coupon: 'sujie888',
    summary:
      '偏重跨境电商、社媒运营和远程会议场景，丢包率控制得不错，开视频会议或者拉取海外代码仓库时很少卡顿。',
    highlights: ['低抖动不丢包', '跨境办公适配', '欧美线路稳'],
    detailHref: '/blog/sujie-review-2026/',
    goHref: '/go/sujie/',
  },
  {
    rank: 5,
    id: 'kexinyun',
    name: '可信云',
    aliases: ['可信云机场', '可信云节点'],
    badge: '低调长寿 · 备用优选',
    categoryTag: 'stable',
    categoryLabel: '稳定主力',
    score: '8.7',
    latency: '42ms (均衡中转)',
    protocol: 'Vless / Trojan',
    priceHint: '按量/月付可选',
    coupon: 'kxy80',
    summary:
      '运营风格比较低调，不搞花哨宣传但在线率一直在线。适合当作第二条备用线路，或者对流量消耗不大、看重长期省心的用户。',
    highlights: ['长期稳定在线', '不限速策略友好', '适合备用'],
    detailHref: '/blog/kexinyun-review-2026/',
    goHref: '/go/kexinyun/',
  },
  {
    rank: 6,
    id: 'bianyuanjiedian',
    name: '边缘节点',
    aliases: ['边缘节点机场', 'EdgeNode'],
    badge: '小众冷门地区 · 极客向',
    categoryTag: 'value',
    categoryLabel: '性价比',
    score: '8.5',
    latency: '45ms (多洲覆盖)',
    protocol: 'VLESS Reality / SS',
    priceHint: '小包灵活 · 冷门地区',
    coupon: 'xk808',
    summary:
      '特色是冷门地区节点多，比如欧洲小国、南美或特定住宅/边缘落地，适合有特定地区 IP 需求或喜欢折腾分流规则的玩家。',
    highlights: ['冷门地区丰富', 'Reality 协议支持', '适合分流玩家'],
    detailHref: '/blog/bianyuanjiedian-review-2026/',
    goHref: '/go/bianyuanjiedian/',
  },
];
