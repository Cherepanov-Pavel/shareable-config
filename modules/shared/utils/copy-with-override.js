/* eslint-disable prefer-template */
import {
	getHeader,
} from "./file-header.js";
import {
	getRecreatedMessage, getUpdatedWithOverrideMessage,
} from "./messages.js";
import {
	readFile, writeFile,
} from "fs/promises";

export async function copyWithOverride({
	destFile,
	srcFileData,
	fileLabel = "",
	overrideRegexp = "^# override.*$",
	comment = "#",
}) {
	try {
		let destFileData;
		try {
			destFileData = await readFile(destFile, "utf8");
		} catch {
			await writeFile(destFile, `${getHeader(comment)}${srcFileData}`);
			console.info(getRecreatedMessage(fileLabel));
			return;
		}
		const destFileOverrideMatch = destFileData.match(new RegExp(overrideRegexp, "imu"));
		if (!destFileOverrideMatch) {
			await writeFile(destFile, `${getHeader(comment)}${srcFileData}`);
			console.info(getRecreatedMessage(fileLabel));
			return;
		}
		const destFileSliced = destFileData.slice(destFileOverrideMatch.index);

		const srcFileOverrideMatch = srcFileData.match(new RegExp(overrideRegexp, "imu"));
		const srcFileSliced = (
			srcFileData
			.slice(0, srcFileOverrideMatch?.index ?? Infinity)
		);
		const newContent = (
			srcFileSliced.trimEnd()
			+ "\n\n"
			+ destFileSliced.trimStart()
		);

		await writeFile(destFile, `${getHeader(comment)}${newContent}`);
		console.info(getUpdatedWithOverrideMessage(fileLabel));
	} catch (err) {
		console.error(`Ошибка копирования ${fileLabel}:`, err.message);
	}
}
