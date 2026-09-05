#!/usr/bin/env node

import {
	askFramework, askOptionsApi, askTypescript,
} from "./utils/communication.js";
import {
	getEnvs, setEnvs,
} from "./utils/env.js";

let envs = {};
try {
	envs = await getEnvs();
} catch (err) {}

envs.isRepositoryUseTypescript = await askTypescript();
envs.repositoryFramework = await askFramework();
envs.isRepositoryUseOptionsApi = await askOptionsApi();

await setEnvs(envs);
