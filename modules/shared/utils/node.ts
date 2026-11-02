import {
	spawn,
} from "node:child_process";

export type SpawnArgs = Parameters<
	typeof spawn
>;

export async function spawnAsync(
	command: SpawnArgs[0],
	args: SpawnArgs[1],
	options: SpawnArgs[2] = {},
): Promise<
	number
> {
	const additionalArgs: string[] = [];
	const isNpmCommand = command === "npm" || command === "npx";
	if (isNpmCommand) {
		additionalArgs.push(
			"--loglevel=warn",
		);
	}

	return new Promise((resolve, reject) => {
		const child = spawn(
			command,
			[
				...additionalArgs,
				...args,
			],
			{
				stdio: "inherit",
				...options,
			},
		);

		child.on("error", (error) => {
			reject(
				error,
			);
		});

		child.on("close", (code, signal) => {
			if (code === 0) {
				resolve(
					code,
				);
			} else {
				reject(
					new Error(
						`The command failed with an error. Code: ${code}, signal: ${signal}`,
					),
				);
			}
		});
	});
}
