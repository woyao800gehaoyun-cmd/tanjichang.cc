import fs from 'node:fs';
import path from 'node:path';

const HOST = 'tanjichang.cc';
const KEY = '8f4e2a9c7b1d4e6f9a3c5b2d8e7f1a4c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve('dist/sitemap-0.xml');

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error('未找到 dist/sitemap-0.xml，请先运行 npm run build');
  process.exit(1);
}

const xml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g))
  .map((m) => m[1])
  .filter((u) => !u.includes('/go/'));

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

console.log(`准备向 IndexNow (Bing) 提交 ${urls.length} 个 URL...`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log(`IndexNow 响应状态: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log('提交成功！Bing 等搜索引擎已收到更新通知。');
} else {
  const text = await res.text();
  console.error('提交返回详情:', text);
  process.exit(1);
}
