import {
	execFileAsync,
} from "@/modules/shared/utils/node.ts";
import {
	getLibTarballName,
} from "@/modules/shared/utils/tar.ts";
import {
	writeFile,
	readFile,
} from "node:fs/promises";
import {
	join,
} from "node:path";

await execFileAsync("npm", [
	"run",
	"tarball",
]);

const astroDir = join(import.meta.dirname, "astro");

const counterFile = join(astroDir, "counter");
const counterFileContent = (
	await (
		readFile(counterFile, "utf8")
		.catch(() => {
			return "1";
		})
	)
).trim();
const counter = counterFileContent === "" ? 0 : Number(counterFileContent);
await writeFile(counterFile, String(counter + 1), "utf8");

const nextTestProjectDirName = `test-project-${counter}`;
await execFileAsync("npm", [
	"--yes",
	"create",
	"astro@latest",
	nextTestProjectDirName,
	"--",
	"--template",
	"framework-multiple",
	"--no",
], {
	cwd: astroDir,
});

const nextTestProjectDir = join(astroDir, nextTestProjectDirName);

await execFileAsync("npm", [
	"i",
	join(process.cwd(), getLibTarballName()),
], {
	cwd: nextTestProjectDir,
});

const packageJsonPath = join(nextTestProjectDir, "package.json");
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
packageJson.scripts = {
	...packageJson.scripts,
	setup: "npx -p \"@cherepanov.pavel/shareable-config\" setup",
	update: "npx -p \"@cherepanov.pavel/shareable-config\" update",
};
await writeFile(
	packageJsonPath,
	JSON.stringify(packageJson, undefined, 2),
	"utf8",
);
