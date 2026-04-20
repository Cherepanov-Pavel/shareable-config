#!/usr/bin/env node

import { askFramework, askTypescript } from './utils/communication.js';
import { getEnvs, setEnvs } from './utils/env.js';

let envs = {};
try {
  envs = await getEnvs();
} catch (err) {}

envs.isRepositoryUseTypescript = await askTypescript();
envs.repositoryFramework = await askFramework();

await setEnvs(envs);
