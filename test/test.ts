// const test = {
// 	a: 3,
// };

@Module({
	imports: [],
	controllers: [
		AppController,
	],
	providers: [
		AppService,
	],
})
export class AppModule {}
