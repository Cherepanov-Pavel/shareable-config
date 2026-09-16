import readline from "readline";

export async function askTypescript() {
	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question(
			"Do you use TypeScript? (Enter — no, any characters + Enter — yes):",
			(answer) => {
				rl.close();
				resolve(Boolean(
					answer,
				));
			},
		);
	});
}

export async function askFramework() {
	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question(
			"Which framework do you use? (vue/nuxt/quasar, press Enter to copy only the framework-less): ",
			(answer) => {
				rl.close();
				resolve(
					answer
					.trim()
					.toLowerCase(),
				);
			},
		);
	});
}

export async function askOptionsApi() {
	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question(
			"Do you use the Vue options API? (Enter — no, any characters + Enter — yes):",
			(answer) => {
				rl.close();
				resolve(Boolean(
					answer,
				));
			},
		);
	});
}
