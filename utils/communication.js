import readline from 'readline';

export async function askTypescript() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(
      'Вы используете typescript? (Enter - нет, любые символы + Enter - да):',
      (answer) => {
        rl.close();
        resolve(Boolean(answer.trim().toLowerCase()));
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
      'Какой фреймворк вы используете? (vue/nuxt/quasar, нажмите Enter, чтобы скопировать только framework-less): ',
      (answer) => {
        rl.close();
        resolve(answer.trim().toLowerCase());
      },
    );
  });
}
