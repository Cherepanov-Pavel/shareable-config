#!/usr/bin/env node

import path from "path";
import {
	readFile,
} from "fs/promises";
import {
	getSrcJsonFileData,
} from "@/modules/shared/utils/file.js";
import {
	mergeWithOverride,
} from "@/modules/shared/utils/merge.js";
import {
	getHeader,
} from "@/modules/shared/utils/file-header.js";
import {
	getEnvs,
} from "@/modules/shared/utils/env";
import {
	outputFile,
} from "fs-extra";
import {
	eslintFiles,
} from "@/modules/shared/utils/lint.js";
import {
	getRecreatedMessage,
	getUpdatedWithOverrideMessage,
} from "@/modules/shared/utils/messages.ts";

const baseFileName = "settings.json";
const srcFileName = `${baseFileName}.example`;
const destFileName = baseFileName;
const destFile = path.join(process.cwd(), ".vscode", destFileName);

try {
	const {
		isRepositoryUseTypescript: isTs,
	} = await getEnvs();
	const srcFile = path.join(import.meta.dirname, srcFileName);
	const srcFileData = await getSrcJsonFileData({
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
		console.info(getUpdatedWithOverrideMessage(destFileName));
	} else {
		console.info(getRecreatedMessage(destFileName));
	}
} catch (err: any) {
	console.error(err.message);
}
