#!/usr/bin/env node

import path from "path";
import {
	fileURLToPath,
} from "url";
import {
	readFile,
} from "fs/promises";
import {
	copyWithOverride,
} from "./modules/shared/utils/copy-with-override.js";
import {
	getEnvs,
} from "./modules/shared/utils/env.js";

const fileName = ".gitignore";
const destFile = path.join(process.cwd(), fileName);

async function getGitignoreFileData(framework) {
	const dirname = path.dirname(fileURLToPath(import.meta.url));
	const src = path.join(dirname, ".npmignore");
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
			header
			.trim()
		) === framework;
	});

	if (matchedSection) {
		const [
			header,
			...body
		] = matchedSection.split("\n");
		return (
			// eslint-disable-next-line prefer-template
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
		fileLabel: fileName,
	});
} catch (err) {
	console.error("Ошибка:", err.message);
}
