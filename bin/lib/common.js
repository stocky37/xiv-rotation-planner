import fetch from 'node-fetch';
import {dirname, join} from 'path';

import {fileURLToPath} from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const projectDir = join(__dirname, '../..');
const imagesDir = join(projectDir, 'public', 'images');
const jobIconsDir = join(imagesDir, 'jobs');
const tmpDir = join(projectDir, '.images');
export const overlayImage = join(imagesDir, 'action-overlay-medium.png');
export const API_URL = process.env['REACT_APP_API_URL'] ?? 'http://localhost:8080';

export async function fetchJobs() {
	return fetch(`${API_URL}/jobs?type=JOB`).then((res) => res.json());
}

export const directories = Object.freeze({
	abilities: {
		public: join(imagesDir, 'abilities'),
		tmp: join(tmpDir, 'abilities'),
	},
	items: {
		public: join(imagesDir, 'items'),
		tmp: join(tmpDir, 'items'),
	},
	jobs: {
		filled: join(jobIconsDir, 'filled'),
		transparent: join(jobIconsDir, 'transparent'),
		stroke: join(jobIconsDir, 'stroke'),
	},
	vendor: join(projectDir, 'vendor'),
});
