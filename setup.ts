#!/usr/bin/env node

import {
	getPkgJson,
} from "@/modules/shared/utils/package-json";
import {
	spawnSync,
} from "child_process";

const pkgJson = getPkgJson();
const includedCommands = [
	"set-env",
	"update",
];
const commands = (
	(Object.keys(pkgJson.bin))
	.filter((command) => {
		return includedCommands.includes(command);
	})
);

for (const command of commands) {
	const result = spawnSync("npx", [
		"-p",
		pkgJson.name,
		command,
	], {
		stdio: "inherit",
	});
	if (result.status !== 0) {
		console.error(`\nAn unexpected error occurred while executing the command: ${command}\n`);
		process.exit(1);
	}
}
