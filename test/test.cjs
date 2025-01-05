const a = {
	fwefew: 'fwefew'
}
console.log(a)
console.log(process.version)

const { exec } = require('child_process');

exec('npm -v', (error, stdout, stderr) => {
if (error) {
	console.error(`Ошибка: ${error.message}`);
	return;
}
if (stderr) {
	console.error(`Ошибка: ${stderr}`);
	return;
}
console.log(`Версия npm: ${stdout.trim()}`);
});
