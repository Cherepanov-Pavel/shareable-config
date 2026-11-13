/*
I don’t see any reason to waste resources keeping this rule enabled.
Although there is some rational basis to the argumentation behind this rule,
there are plenty of examples where class methods don’t need this. Like example controller from nest

@Controller("users")
export class UserController {
	@Get()
	getUser(@Query("name") name: string): string {
		return getName(name);
	}
}
*/
