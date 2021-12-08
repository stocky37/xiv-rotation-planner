const prefix = 'REACT_APP_';

declare global {
	interface Window {
		env: {[x: string]: string};
	}
}

function env(key: string, defaultValue?: string): string | undefined {
	const searchKey = prefix + key;
	if (window.env && searchKey in window.env) {
		return window.env[searchKey];
	}
	return searchKey in process.env ? process.env[searchKey] : defaultValue;
}

export const API_URL: string = env('API_URL', 'http://localhost:8080') as string;
export const CACHE_STALE_TIME = parseInt(env('CACHE_STALE_TIME', '60000') as string, 10);
