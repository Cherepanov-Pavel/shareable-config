#!/usr/bin/env node
/* eslint-disable prefer-template */

import path from "path";
import {
	readFile,
} from "fs/promises";
import {
	copyWithOverride,
} from "@/modules/shared/utils/copy-with-override.js";
import {
	getEnvs,
} from "@/modules/shared/utils/env.js";
import type {
	SupportedFrameworks,
} from "@/modules/shared/constants/env.ts";
import type {
	Env,
} from "@/modules/shared/types/env.js";

const baseFileName = ".gitignore";
const srcFileName = `${baseFileName}.example`;
const destFileName = baseFileName;
const destFile = path.join(process.cwd(), destFileName);

async function getGitignoreFileData(framework: Env["repositoryFramework"]) {
	const src = path.join(import.meta.dirname, srcFileName);
	const srcFileData = await readFile(src, "utf8");

	const [
		commonData,
		...sections
	] = srcFileData.split(/^# /mu);

	if (!framework) {
		return commonData;
	}

	const matchedSection = sections.find((section) => {
		const [
			header,
		] = section.split("\n");
		return (
			header.trim() as SupportedFrameworks
		) === framework;
	});

	if (matchedSection) {
		const [
			header,
			...body
		] = matchedSection.split("\n");
		return (
			`${commonData.trim()}\n\n`
			+ `# ${header.trim()}\n`
			+ (
				body
				.join("\n")
				.trim()
			)
		);
	}
	// Если не найдено, только общий контент
	return commonData;
}

try {
	const {
		repositoryFramework,
	} = await getEnvs();
	const srcFileData = await getGitignoreFileData(repositoryFramework);
	await copyWithOverride({
		destFile,
		srcFileData,
		fileLabel: destFileName,
	});
} catch (err: any) {
	console.error(err.message);
}
