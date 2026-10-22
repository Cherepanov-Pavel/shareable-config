#!/usr/bin/env node

import {
	getPkgJson,
} from "@/modules/shared/utils/package-json";
import {
	spawnSync,
} from "child_process";

const pkgJson = getPkgJson();
const excludedCommands = [
	"setup",
	"update",
	"set-env",
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
	const result = spawnSync("npx", [
		"-p",
		pkgJson.name,
		command,
	], {
		stdio: "inherit",
	});
	if (result.status !== 0) {
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
