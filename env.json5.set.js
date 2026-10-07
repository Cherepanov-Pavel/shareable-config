#!/usr/bin/env node

import {
	askFramework, askOptionsApi, askTypescript,
} from "./modules/shared/utils/communication.js";
import {
	getEnvs, setEnvs,
} from "./modules/shared/utils/env.js";

const envs = await (
	getEnvs()
	.catch(() => {
		return {
		};
	})
);

envs.isRepositoryUseTypescript = await askTypescript();
envs.repositoryFramework = await askFramework();
envs.isRepositoryUseOptionsApi = await askOptionsApi();

await setEnvs(envs);
