import path from 'path';

import {fileURLToPath} from 'url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectDir = path.join(__dirname, '../..');
const imagesDir = path.join(projectDir, 'public', 'images');
const tmpDir = path.join(projectDir, '.images');
export const overlayImage = path.join(imagesDir, 'action-overlay-medium.png');
export const API_URL = process.env['REACT_APP_API_URL'] ?? 'http://localhost:8080';

export const directories = Object.freeze({
	abilities: {
		public: path.join(imagesDir, 'abilities'),
		tmp: path.join(tmpDir, 'abilities'),
	},
	items: {
		public: path.join(imagesDir, 'items'),
		tmp: path.join(tmpDir, 'items'),
	},
});
