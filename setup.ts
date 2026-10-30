#!/usr/bin/env node
/* eslint-disable no-await-in-loop */

import {
	spawnAsync,
} from "@/modules/shared/utils/node";
import {
	getPkgJson,
} from "@/modules/shared/utils/package-json";

const pkgJson = getPkgJson();
const commands = [
	"set-env",
	"update",
];
for (const command of commands) {
	try {
		await spawnAsync("npx", [
			"-p",
			pkgJson.name,
			command,
		]);
	} catch {
		console.error(`\nAn unexpected error occurred while executing the command: ${command}\n`);
		process.exit(1);
	}
}
