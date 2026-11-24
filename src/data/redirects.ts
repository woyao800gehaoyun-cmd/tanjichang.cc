export interface RedirectEntry {
  id: string;
  name: string;
  url: string;
  description: string;
  note?: string;
}

export const redirects: Record<string, RedirectEntry> = {
  example: {
    id: 'example',
    name: '探机场示例说明页',
    url: 'https://tanjichang.cc',
    description: '站外中转页占位示例，后续可在此集中替换各家机场的官方入口链接。',
    note: '所有外链均通过 /go/[id]/ 统一管理，便于后续随时更新域名且不伤 SEO。',
  },
  guangnianti: {
    id: 'guangnianti',
    name: '光年梯（13元/月 · 120G流量）',
    url: 'https://gnt001.gntvipaff.cc/#/?code=FRrxGbbY',
    description: '即将前往光年梯官方入口，优惠码 GNT80。',
    note: '提示：优惠码 GNT80，2026 综合榜首专线主力。',
  },
  jilianyun: {
    id: 'jilianyun',
    name: '极连云（15元/月 · 120G流量）',
    url: 'https://haozevpn02.jlyvipaff.com/#/?code=6aTAi9bW',
    description: '即将前往极连云官方注册入口，结账时可使用专属优惠码 JLY888。',
    note: '提示：优惠码 JLY888，多地区覆盖、多设备并发稳定。',
  },
  kuaili: {
    id: 'kuaili',
    name: '快狸',
    url: 'https://aolaiyun01.kuailiaff.com/#/?code=AFR8PsiY',
    description: '即将前往快狸官方入口，优惠码 kl888。',
  },
  sujie: {
    id: 'sujie',
    name: '速界',
    url: 'https://tanjichang.cc/brands/',
    description: '速界入口占位：可在 src/data/redirects.ts 中替换为真实地址。',
  },
  kexinyun: {
    id: 'kexinyun',
    name: '可信云',
    url: 'https://everett7623.kosingaff.com//#/?code=4PQnpXx6',
    description: '即将前往可信云官方入口，优惠码 kxy80。',
  },
  bianyuanjiedian: {
    id: 'bianyuanjiedian',
    name: '边缘节点',
    url: 'https://tanjichang.cc/brands/',
    description: '边缘节点入口占位：可在 src/data/redirects.ts 中替换为真实地址。',
  },
};
