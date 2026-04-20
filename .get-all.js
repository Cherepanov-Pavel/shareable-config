#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { readFile } from 'fs/promises';

const commands = [
  'get-editorconfig',
  'get-gitattributes',
  'get-gitignore',
  'get-extensions',
  'get-settings',
  'get-code-snippets',
];

let hasError = false;

const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url), 'utf8'));

commands.forEach((cmd) => {
  const result = spawnSync('npx', ['-p', pkg.name, cmd], { stdio: 'inherit' });
  if (result.status !== 0) {
    console.error(`\nОшибка при выполнении команды: ${cmd}`);
    hasError = true;
  }
});

if (hasError) {
  process.exit(1);
}
