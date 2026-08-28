/*
"@stylistic/array-bracket-newline": [
	ERROR,
	{ multiline: true, minItems: 1 },
],
"@stylistic/array-bracket-spacing": [
	ERROR,
	"never",
],
"@stylistic/array-element-newline": [
	ERROR,
	{ multiline: true, minItems: 1 },
],
*/
/*
/*
For arrays with at least one element, we always place the elements on separate lines.
This makes adding or removing elements cleaner in Git diffs
and makes changes easier to review and track with `git blame`.
It also helps keep individual lines reasonably short,
which reduces unnecessary violations of `max-len`.
Empty arrays are kept on a single line,
however: const arr = []; An empty array is often used as a container that is populated later,
for example with `arr.push()` inside a loop.
In such cases, adding unnecessary line breaks around the brackets would only add visual noise.

It is worth noting that this approach can make the code less compact in many cases.
If there were an option to break array elements only when they exceed the `max-len` limit,
I would probably prefer that approach.
However, since such an option is not available,
and considering the benefits for Git diffs and `git blame`,
I consider this approach to be a reasonable compromise.
*/
const arr = [
	1,
];
