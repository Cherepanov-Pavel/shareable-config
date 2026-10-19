import {
	execFileAsync,
} from "@/modules/shared/utils/node.ts";
import {
	getLibTarballName,
} from "@/modules/shared/utils/tar.ts";

await execFileAsync(
	"npm",
	[
		"pack",
	],
);

console.info(`${getLibTarballName()} created`);
