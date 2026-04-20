import { readFile } from 'fs/promises';
import path from 'path';
import JSON5 from 'json5';
import { outputFile } from 'fs-extra';

const envFileSrc = path.join(process.cwd(), 'frontend-configs.env.json5');

export async function getEnvs() {
  const srcFileData = await readFile(envFileSrc, 'utf8');
  const parsedSrcFileData = JSON5.parse(srcFileData);
  return parsedSrcFileData;
}

export async function setEnvs(envObj) {
  await outputFile(envFileSrc, JSON5.stringify(envObj, null, 2));
}
