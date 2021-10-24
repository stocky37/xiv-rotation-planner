import qs from 'qs';
import {QueryParams, XIVAction} from './types';
import history from './history';
import jsoncrush from 'jsoncrush';

export function getQueryParams() {
	return qs.parse(history.location.search, {ignoreQueryPrefix: true, parseArrays: false});
}

export function updateQueryParams(update: QueryParams) {
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

export function updateRotationQueryParam(actions: XIVAction[]) {
	const rotation = jsoncrush.crush(
		JSON.stringify(
			actions.map((action) => {
				return action.id;
			})
		)
	);

	updateQueryParams({rotation});
}

export function getRotationQueryParam(): string[] {
	const value = getQueryParams().rotation as string;
	return !value ? [] : JSON.parse(jsoncrush.uncrush(value));
}
