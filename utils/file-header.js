import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

export function getHeader(comment = '//') {
  const lines = [
    'This file is generated with',
    `${pkg.repository?.url || ''}`,
    `Version: ${pkg.version || ''}`,
    'File may contain override sections, see project README for more details',
  ];

  return `${lines.map((line) => {
    return `${comment} ${line}`.trim();
  }).join('\n')}\n`;
}
