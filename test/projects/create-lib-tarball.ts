import {
	spawnAsync,
} from "@/modules/shared/utils/node.ts";
import {
	getLibTarballName,
} from "@/modules/shared/utils/tar.ts";

await spawnAsync(
	"npm",
	[
		"pack",
	],
);

console.info(`${getLibTarballName()} created`);
