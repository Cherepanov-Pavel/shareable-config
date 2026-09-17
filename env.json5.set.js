#!/usr/bin/env node

import {
	askFramework, askOptionsApi, askTypescript,
} from "./modules/shared/utils/communication.js";
import {
	getEnvs, setEnvs, envFileSrc,
} from "./modules/shared/utils/env.js";
import {
	eslintFiles,
} from "./modules/shared/utils/lint.js";

let envs = {};
try {
	envs = await getEnvs();
} catch (err) {}

envs.isRepositoryUseTypescript = await askTypescript();
envs.repositoryFramework = await askFramework();
envs.isRepositoryUseOptionsApi = await askOptionsApi();

await setEnvs(envs);

await eslintFiles(envFileSrc);
