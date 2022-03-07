#!/usr/bin/env node

import Promises from 'bluebird';
import {exec} from 'child_process';
import fs from 'fs';
import path from 'path';
import {overlayImage} from './common.js';

const defaultOptions = Object.freeze({concurrency: 8});
const execPromise = Promises.promisify(exec);

export async function overlayIcons(fromDir, toDir, options = defaultOptions) {
	const _options = {
		...defaultOptions,
		...options,
	};
	const filenames = fs.readdirSync(fromDir).filter((fn) => fn.endsWith('.png'));
	const mdir = path.join(toDir, 'm');
	const sdir = path.join(toDir, 's');

	fs.mkdirSync(mdir, {recursive: true});
	fs.mkdirSync(sdir, {recursive: true});

	Promises.map(
		filenames,
		(fn) => {
			const infile = path.join(fromDir, fn);
			const outfile = path.join(mdir, fn);
			const smallOutfile = path.join(sdir, fn);
			return Promises.all(
				execPromise(
					`convert -extent 46x46 -background none -page +3+2 '${infile}' -page -1+0 '${overlayImage}' -flatten 'png00:${outfile}'`
				),
				execPromise(
					`convert -extent 46x46 -background none -page +3+2 '${infile}' -page -1+0 '${overlayImage}' -flatten -adaptive-resize 75% 'png00:${smallOutfile}'`
				)
			);
		},
		_options
	);
}

function mkdir(path) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
}
