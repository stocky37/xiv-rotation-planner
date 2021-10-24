import qs from 'qs';
import {QueryParams} from './types';
import history from './history';

export function getQueryParams() {
	return qs.parse(history.location.search, {ignoreQueryPrefix: true});
}

export function updateQueryParams(update: QueryParams) {
	const updated = {
		...getQueryParams(),
		...update,
	};
	history.push({
		search: `?${qs.stringify(updated)}`,
	});
}
