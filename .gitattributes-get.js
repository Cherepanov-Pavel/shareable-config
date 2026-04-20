#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { copyWithOverride } from './utils/copy-with-override.js';
import { readFile } from 'fs/promises';

const fileName = '.gitattributes';
const destFile = path.join(process.cwd(), fileName);

const dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dirname, fileName);
const srcFileData = await readFile(src, 'utf8');

copyWithOverride({
  destFile,
  srcFileData,
  fileLabel: fileName,
});
