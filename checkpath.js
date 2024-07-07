import { globSync } from 'glob';
import { resolve } from 'path';

// contentディレクトリ内の全てのMarkdownファイルを検索
const contentPath = resolve('content/**/*.md');
const routeNames = globSync(contentPath).map((f) => {
  // パスを整形して返す
  const pattern = /^\/[^\/]+\/[^\/]+\/hisalog\/content/;
  return f.replace(pattern, '').replace('.md', '');
});
console.log('Formatted paths:', routeNames);