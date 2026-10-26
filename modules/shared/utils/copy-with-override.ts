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
}: {
	destFile: string;
	srcFileData: string;
	fileLabel?: string;
	overrideRegexp?: string;
	comment?: string;
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
		/* TODO:
		remove after 3.0.0
		*/
		destFileData = destFileData.replace("export function override()", "function override()");
		const destFileOverrideMatch = new RegExp(overrideRegexp, "imu")
		.exec(destFileData);
		if (!destFileOverrideMatch) {
			await writeFile(destFile, `${getHeader(comment)}${srcFileData}`);
			console.info(getRecreatedMessage(fileLabel));
			return;
		}
		const destFileSliced = destFileData.slice(destFileOverrideMatch.index);

		const srcFileOverrideMatch = new RegExp(overrideRegexp, "imu")
		.exec(srcFileData);
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
	} catch (err: any) {
		console.error(`Ошибка копирования ${fileLabel}:`, err.message);
	}
}
