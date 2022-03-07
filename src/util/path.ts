// source: jbgutierrez/path-parse

const splitPathRe = /^((\/?)(?:[^/]*\/)*)((\.{1,2}|[^/]+?|)(\.[^./]*|))[/]*$/;

function posixSplitPath(filename: string) {
	return splitPathRe.exec(filename)?.slice(1);
}

type SplitPath = {
	root: string;
	dir: string;
	base: string;
	ext: string;
	name: string;
};

export function parse(path: string): SplitPath {
	const allParts = posixSplitPath(path);
	if (!allParts || allParts.length !== 5) {
		throw new TypeError("Invalid path '" + path + "'");
	}

	return {
		root: allParts[1],
		dir: allParts[0].slice(0, -1),
		base: allParts[2],
		ext: allParts[4],
		name: allParts[3],
	};
}
