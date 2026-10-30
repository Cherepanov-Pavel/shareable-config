#!/usr/bin/env node
/* eslint-disable no-await-in-loop */

import {
	spawnAsync,
} from "@/modules/shared/utils/node";
import {
	getPkgJson,
} from "@/modules/shared/utils/package-json";

const pkgJson = getPkgJson();
const excludedCommands = [
	"setup",
	"update",
	"set-env",
	/* TODO:
	remove after 3.0.0
	*/
	"get-all",
];
// type AllCommands = keyof typeof pkgJson.bin;
// type Command = Exclude<AllCommands, typeof excludedCommands[number]>;
const commands = (
	(Object.keys(pkgJson.bin))
	.filter((command) => {
		return !excludedCommands.includes(command);
	})
);
// const {
// 	setup, update, "set-env": setEnv, ...commands
// } = pkgJson.bin;

for (const command of commands) {
	try {
		await spawnAsync("npx", [
			"-p",
			pkgJson.name,
			command,
		]);
	} catch {
		console.error(`\nОшибка при выполнении команды: ${command}\n`);
		process.exit(1);
	}
}
// commands.forEach((cmd) => {
// 	const result = spawnSync("npx", [
// 		"-p",
// 		pkgJson.name,
// 		cmd,
// 	], {
// 		stdio: "inherit",
// 	});
// 	if (result.status !== 0) {
// 		console.error(`\nОшибка при выполнении команды: ${cmd}`);
// 		hasError = true;
// 	}
// });
// console.log(hasError);
