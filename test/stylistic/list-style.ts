/*
	"@stylistic/exp-list-style": [
		ERROR,
		{
			singleLine: {
				spacing: "never",
				maxItems: 0,
			},
			multiLine: {
				minItems: 1,
			},
		},
	],
*/

/*
For arrays/objects with at least one element, we always place the elements on separate lines.
This makes adding or removing elements cleaner in Git diffs
and makes changes easier to review and track with `git blame`.
It also helps keep individual lines reasonably short,
which reduces unnecessary violations of `max-len`.
Empty arrays/objects are kept on a single line,
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

type Type = any[];

const emptyArr: Type = [];
const emptyArrWithComment = [
	1,
];
const arr = [
	1,
	2,
	3,
	4,
	5,
	6,
];
const manyElementsArr = [
	1,
	2,
	3,
	4,
	5,
];

const someEmptyObjectExpression = {
};
const someObjectExpression = {
	// b: 3
};
const someManyElementsObjExpression = {
	c: 4,
};

const someManyElementsObjExpressionOneLine = {
	c: 4,
	d: 5,
	e: 6,
};

// eslint-disable-next-line no-empty-pattern
const {
} = someEmptyObjectExpression;
const {
	// b
} = someObjectExpression;
/*
we can't set object-property-newline after 1 property for ObjectPattern, or i don't know the way
*/
const {
	c,
	d,
	e,
} = someManyElementsObjExpression;

// TSTypeLiteral
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Point = {
	x: number;
	y: number;
};

// TSInterfaceBody
interface SecondPoint {
	x: number;
	y: number;
}

// TSEnumBody
enum Color {
	Red = "red",
	Green = "green",
	Blue = "blue",
}


const testElem = {
	line: {exceptions: [
		"-",
		"+",
	]},
};

const testElem2 = {
	// eslint-disable-next-line @stylistic/exp-list-style
	line: {exceptions: "ex"},
};

const testElem3 = {
	line: {exceptions: {
		a: "dwd",
	}},
};

const testElem4 = {
	line: {exceptions: [
		"-",
		"+",
	], exx: [], test: []},
};
