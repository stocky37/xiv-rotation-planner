import {symlink, unlink} from 'fs/promises';
import {basename, dirname, extname, join, relative} from 'path';
import {directories, fetchJobs} from './common.js';

const srcDir = join(directories.vendor, 'xivapi', 'classjob-icons');

export async function configureJobIcons() {
	return fetchJobs().then((jobs) =>
		Promise.all(
			jobs.map((job) =>
				Promise.all([linkFilledIcon(job), linkTransparentIcon(job), linkStrokeIcon(job)])
			)
		)
	);
}

async function linkFilledIcon(job) {
	return linkIcon(job, join(srcDir, 'companion', basename(job.icon)), directories.jobs.filled);
}

function linkTransparentIcon(job) {
	return linkIcon(job, join(srcDir, 'icons', basename(job.icon)), directories.jobs.transparent);
}

function linkStrokeIcon(job) {
	return linkIcon(job, join(srcDir, 'svg', svgFilename(job.id)), directories.jobs.stroke);
}

function svgFilename(id) {
	return `class_job_${id.padStart(3, '0')}.svg`;
}

async function linkIcon(job, target, path) {
	const ext = extname(target);
	const filename = `${job.slug}${ext}`;
	const destpath = join(path, filename);
	unlink(destpath)
		.catch(() => Promise.resolve())
		.finally(() => symlink(relative(dirname(destpath), target), destpath));
}
