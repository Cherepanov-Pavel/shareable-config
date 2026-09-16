#!/usr/bin/env node

import path from "path";
import {
	readFile,
} from "fs/promises";
import {
	getSrcJSONFileData,
} from "../modules/shared/utils/file.js";
import {
	mergeWithOverride,
} from "../modules/shared/utils/merge.js";
import {
	getHeader,
} from "../modules/shared/utils/file-header.js";
import {
	getEnvs,
} from "../modules/shared/utils/env.js";
import {
	outputFile,
} from "fs-extra";
import {
	eslintFiles,
} from "../modules/shared/utils/lint.js";

const fileName = "extensions.json";
const destFile = path.join(process.cwd(), `.vscode/${fileName}`);

try {
	const {
		isRepositoryUseTypescript: isTs,
	} = await getEnvs();
	const srcFile = path.join(import.meta.dirname, fileName);
	const srcFileData = await getSrcJSONFileData({
		fileData: await readFile(srcFile, "utf8"),
		isTs,
	});
	let overrideContent;
	try {
		const fileData = await readFile(destFile, "utf8");
		overrideContent = fileData.includes("// override") ? fileData : undefined;
	} catch (err) {}

	let result;
	if (overrideContent) {
		result = await mergeWithOverride(srcFileData, overrideContent);
	} else {
		result = srcFileData;
	}

	await outputFile(destFile, `${getHeader()}${result}`);
	await eslintFiles(destFile);
	if (overrideContent) {
		console.info(`${fileName} обновлён с учётом override`);
	} else {
		console.info(`${fileName} пересоздан`);
	}
} catch (err) {
	console.error("Ошибка:", err.message);
}
