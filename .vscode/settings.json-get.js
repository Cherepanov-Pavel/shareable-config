#!/usr/bin/env node

import path from 'path';
import { readFile } from 'fs/promises';
import { getSrcJSONFileData } from '../utils/file.js';
import { mergeWithOverride } from '../utils/merge.js';
import { getHeader } from '../utils/file-header.js';
import { getEnvs } from '../utils/env.js';
import { outputFile } from 'fs-extra';

const fileName = 'settings.json';
const destFile = path.join(process.cwd(), `.vscode/${fileName}`);

try {
  const {
    isRepositoryUseTypescript: isTs,
  } = await getEnvs();
  const baseContent = await getSrcJSONFileData({
    fileName,
    isTs,
  });
  let overrideContent;
  try {
    const fileData = await readFile(destFile, 'utf8');
    overrideContent = fileData.includes('// override') ? fileData : undefined;
  } catch (err) {}

  let result;
  if (overrideContent) {
    result = await mergeWithOverride(baseContent, overrideContent);
  } else {
    result = baseContent;
  }

  await outputFile(destFile, `${getHeader()}${result}`);
  if (overrideContent) {
    console.info(`${fileName} обновлён с учётом override`);
  } else {
    console.info(`${fileName} пересоздан`);
  }
} catch (err) {
  console.error('Ошибка:', err.message);
}
