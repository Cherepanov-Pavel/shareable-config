/* eslint-disable no-ternary */
/* eslint-disable @stylistic/no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/naming-convention */
/*
you always can write IIFE instead of ternary, and it will be more readable, extendable, better
*/
const RSSSourceList: any[] = [];
const source: any = undefined;



let selectedSources = (
	source === undefined
		? RSSSourceList
		: RSSSourceList.find(({
			host,
		}) => {
			return host === source;
		})
);

selectedSources = (() => {
	if (source === undefined) {
		return RSSSourceList;
	}
	return RSSSourceList.find(({
		host,
	}) => {
		return host === source;
	});
})();
