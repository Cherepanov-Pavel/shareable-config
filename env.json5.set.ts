#!/usr/bin/env node

import type {
	Env,
} from "@/modules/shared/types/env.js";
import {
	askFramework, askOptionsApi, askTypescript,
} from "@/modules/shared/utils/communication.js";
import {
	setEnvs,
} from "@/modules/shared/utils/env.js";

const envs: Env = {
	isRepositoryUseTypescript: await askTypescript(),
	repositoryFramework: await askFramework(),
	isRepositoryUseOptionsApi: await askOptionsApi(),
};

await setEnvs(envs);
