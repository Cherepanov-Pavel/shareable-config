/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable id-length */
const zod: any = {};


/*
Unfortunately, ESLint doesn’t allow you to set it so that
the call chain always follows the order I like (such as).
*/
let a = (
	zod
	.string()
	.array()
	.object()
	.test()
	.test2()
	.test3()
);
/*
So, overall, we can write it this way.
*/
a = zod.string()
.array()
.object()
.test()
.test2()
.test3();

const z: any = {};
/*
@stylistic/indent set to MemberExpression: 0,
reasons:
✅ Saves space when nesting
✅ Clearly shows the “base” object
*/
// seems less clear and clean for me:
/* eslint-disable */
let schema = z.object({
	NUXT_PAGE_SIZE: (
		z
			.coerce
			.number()
			.int()
			.positive()
	),
	NUXT_PUBLIC_RSS_SOURCE_LIST: (
		z
			.string()
			.transform((val) => {
				return JSON.parse(val);
			})
			.pipe(
				z
					.array(
						z.object({
							href: z.url(),
						}),
					)
					.min(1),
			)
	),
});
/* eslint-enable */
// seems good for me:
schema = z.object({
	NUXT_PAGE_SIZE: (
		z
		.coerce
		.number()
		.int()
		.positive()
	),
	NUXT_PUBLIC_RSS_SOURCE_LIST: (
		z
		.string()
		.transform((val) => {
			return JSON.parse(val);
		})
		.pipe(
			z
			.array(
				z.object({
					href: z.url(),
				}),
			)
			.min(1),
		)
	),
});
