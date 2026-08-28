// consistent
/*
When we create objects on the frontend,
we use camelCase for their properties in 99% of cases.
*/
let obj: unknown = {
	property: 12,
	propertyProperty: 14,
};
/*
However, when we receive objects from the backend
(which is often written in a different programming language),
their properties can use a different naming convention,
for example, kebab-case.
Converting all such property names to camelCase can be a resource-intensive task.
Therefore, when working with data received from the backend,
we often preserve its original naming convention.
*/
obj = {
	"property": 12,
	"property-property": 14,
};

/*
Rather than enforcing a single style, the `consistent` option simply allows us
to choose between using quotes consistently or omitting them where possible.
This gives us the freedom to omit unnecessary quotes when describing frontend data,
or to quote all properties when describing backend data.
This also makes it easier to visually distinguish between frontend objects
and data received from the backend.
Without insisting on any single option in this choice,
and merely offering the option of consistency,
we give the freedom to describe objects without
unnecessary brackets when they describe frontend data,
or to enclose all properties in brackets if the data comes from the backend
this will allow to quickly distinguish one from the other.
*/
