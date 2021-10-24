import jsoncrush from 'jsoncrush';
import qs, {ParsedQs} from 'qs';

import history from './history';
import {QueryParams, XIVAction} from './types';

export function getQueryParams(): ParsedQs {
	return qs.parse(history.location.search, {ignoreQueryPrefix: true, parseArrays: false});
}

export function updateQueryParams(update: QueryParams): void {
	const updated = {
		...getQueryParams(),
		...update,
	};
	history.replace({
		search: qs.stringify(updated, {
			addQueryPrefix: true,
			encode: false,
		}),
	});
}

export function updateRotationQueryParam(actions: XIVAction[]): void {
	const rotation = jsoncrush.crush(JSON.stringify(actions.map((action) => action.id)));

	updateQueryParams({rotation});
}

export function getRotationQueryParam(): string[] {
	const value = getQueryParams().rotation as string;
	return !value ? [] : (JSON.parse(jsoncrush.uncrush(value)) as string[]);
}
