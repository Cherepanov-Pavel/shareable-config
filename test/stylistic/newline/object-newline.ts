/*
"@stylistic/object-curly-newline": [
	ERROR,
	{
		"ObjectExpression": { multiline: false, minProperties: 1 },
		"ObjectPattern": { multiline: false, minProperties: 1 },
		"ImportDeclaration": { multiline: false, minProperties: 1 },
		"ExportDeclaration": { multiline: false, minProperties: 1 },
		"TSTypeLiteral": { multiline: false, minProperties: 1 },
		"TSInterfaceBody": { multiline: false, minProperties: 1 },
		"TSEnumBody": { multiline: false, minProperties: 1 },
	}
],
"@stylistic/object-curly-spacing": [
	ERROR,
	"never",
],
"@stylistic/object-property-newline": [
	ERROR,
	{ allowAllPropertiesOnSameLine: false },
],
*/
/*
Regarding these rules, the arguments are the same as in array-newline
*/
const someEmptyObjectExpression = {};
const someObjectExpression = {
	b: 3,
};
const someManyElementsObjExpression = {
	c: 4,
	d: 5,
	e: 6,
};

// eslint-disable-next-line no-empty-pattern
const {} = someEmptyObjectExpression;
const {
	b,
} = someObjectExpression;
/*
we can't set object-property-newline after 1 property for ObjectPattern, or i don't know the way
*/
const {
	c, d, e,
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
	red = "red",
	green = "green",
	blue = "blue",
}
