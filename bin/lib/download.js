#!/usr/bin/env node

import {constants, createWriteStream, mkdirSync} from 'fs';
import {access} from 'fs/promises';
import fetch from 'node-fetch';
import path from 'path';
import {API_URL} from './common.js';

function downloadIcon(destDir, icon) {
	let filename = path.join(destDir, path.basename(icon));
	return access(filename, constants.F_OK).catch(() => {
		console.log(`Downloading ${icon}...`);
		return fetch(icon).then((res) => {
			const dest = createWriteStream(filename);
			res.body.pipe(dest);
		});
	});
}

export async function downloadAbilityIcons(destDir) {
	const abilities = new Set();
	mkdirSync(destDir, {recursive: true});
	console.log('Fetching jobs...');
	await fetch(`${API_URL}/jobs?type=JOB`)
		.then((res) => res.json())
		.then((jobs) =>
			Promise.all(jobs.map((job) => fetch(`${API_URL}/jobs/${job.id}`).then((res) => res.json())))
		)
		.then((jobs) => {
			jobs.map((job) => {
				job.abilities.forEach((ability) => abilities.add(ability.icon));
			});
		});

	console.log('Downloading icons...');
	await Promise.all(Array.from(abilities).map((icon) => downloadIcon(destDir, icon)));
}

export async function downloadItemIcons(destDir) {
	const items = new Set();
	mkdirSync(destDir, {recursive: true});
	console.log('Fetching jobs...');
	await fetch(`${API_URL}/jobs?type=JOB`)
		.then((res) => res.json())
		.then((jobs) =>
			Promise.all(jobs.map((job) => fetch(`${API_URL}/jobs/${job.id}`).then((res) => res.json())))
		)
		.then((jobs) => {
			jobs.map((job) => {
				job.potions.forEach((item) => items.add(item.icon));
			});
		});

	console.log('Downloading icons...');
	await Promise.all(Array.from(items).map((icon) => downloadIcon(destDir, icon)));
}
