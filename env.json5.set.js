#!/usr/bin/env node

import {
	askFramework, askOptionsApi, askTypescript,
} from "./modules/shared/utils/communication.js";
import {
	getEnvs, setEnvs,
} from "./modules/shared/utils/env.js";

let envs = {};
try {
	envs = await getEnvs();
} catch (err) {}

envs.isRepositoryUseTypescript = await askTypescript();
envs.repositoryFramework = await askFramework();
envs.isRepositoryUseOptionsApi = await askOptionsApi();

await setEnvs(envs);
