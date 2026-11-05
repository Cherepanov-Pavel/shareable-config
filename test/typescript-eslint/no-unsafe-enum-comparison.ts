/*
I have this variables:
*/
export enum SupportedFrameworks {
	Vue = "vue",
	Nuxt = "nuxt",
	Quasar = "quasar",
	Astro = "astro",
}

export const frameworksWithVueSupport = [
	SupportedFrameworks.Vue,
	SupportedFrameworks.Nuxt,
	SupportedFrameworks.Quasar,
	SupportedFrameworks.Astro,
] as const;
/*
and I need to check, that frameworksWithVueSupport contains string
*/

const test = "123421";

/*
I can't write just
*/

frameworksWithVueSupport.includes(
	test,
);

/*
since
⚠ Error (TS2345)
Argument of type string
 is not assignable to parameter of type
 SupportedFrameworks

ok. I can use some, right?
*/

frameworksWithVueSupport.some(
	(
		framework,
	) => {
		return framework === test;
	},
);

/*
no, I getting @typescript-eslint/no-unsafe-enum-comparison error.
*/

/*
In fact, this rule regulates something that is actually needed. If the variable is an enum,
you need to import the enum and compare variable with the enum, not with a string.
However, this is such an obvious thing, and in case of errors,
it’s easily caught during code review, that spending resources on
checking this rule and writing eslint-disable comments
in cases like the one described above is rather unjustified.
*/
