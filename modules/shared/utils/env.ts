import {
	readFile,
} from "fs/promises";
import path from "path";
import JSON5 from "json5";
import {
	outputFile,
} from "fs-extra";
import {
	eslintFiles,
} from "./lint.js";
import {
	envFileName,
} from "@/modules/shared/constants/file.js";
import type {
	Env,
} from "@/modules/shared/types/env.js";

const envFilePath = path.join(process.cwd(), envFileName);
/* TODO:
remove after 3.0.0
*/
const oldEnvFilePath = path.join(process.cwd(), "frontend-configs.env.json5");

export async function getEnvs() {
	const srcFileData = (
		await readFile(envFilePath, "utf8")
		.catch(async () => {
			return readFile(oldEnvFilePath, "utf-8");
		})
	);
	const parsedSrcFileData = JSON5.parse<Env>(srcFileData);
	return parsedSrcFileData;
}

export async function setEnvs(envObj: Env) {
	await outputFile(envFilePath, JSON5.stringify(envObj, null, 2));
	await eslintFiles(envFilePath)
	.catch(() => {
		// Most often, we create the env file before creating the eslint.config file and get error
	});
}
