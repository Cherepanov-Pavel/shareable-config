#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { copyWithOverride } from './utils/copy-with-override.js';
import { getEnvs } from './utils/env.js';

const fileName = '.gitignore';
const destFile = path.join(process.cwd(), fileName);

async function getGitignoreFileData(framework) {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const src = path.join(dirname, '.npmignore');
  const srcFileData = await readFile(src, 'utf8');

  const [commonData] = srcFileData.split(/^#\s*\w+/mu);

  if (!framework) {
    return commonData.trim();
  }

  const sections = srcFileData.split(/^#\s*/mu).slice(1);
  const matchedSection = sections.find((section) => {
    const [header] = section.split('\n');
    return header.trim().toLowerCase() === framework;
  });

  if (matchedSection) {
    const [header, ...body] = matchedSection.split('\n');
    return `${commonData.trim()}\n\n# ${header}\n${body.join('\n').trim()}`.trim();
  }
  // Если не найдено — только общий контент
  return commonData.trim();
}

try {
  const { repositoryFramework } = await getEnvs();
  const srcFileData = await getGitignoreFileData(repositoryFramework);
  await copyWithOverride({
    destFile,
    srcFileData,
    fileLabel: fileName,
  });
} catch (err) {
  console.error('Ошибка:', err.message);
}
