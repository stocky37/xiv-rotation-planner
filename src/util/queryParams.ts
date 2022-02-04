import jsoncrush from 'jsoncrush';

export function compress<T>(value: T): string {
	return jsoncrush.crush(JSON.stringify(value));
}

export function decompress<T>(value: string): T {
	return JSON.parse(jsoncrush.uncrush(value)) as T;
}
