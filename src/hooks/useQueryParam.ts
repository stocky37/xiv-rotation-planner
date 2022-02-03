import useQueryParams from 'hooks/useQueryParams';
import qs from 'qs';
import {useCallback, useMemo} from 'react';
import history from 'util/history';

export default function useQueryParam(
	key: string
): [string | undefined, (newValue: string) => void] {
	const params = useQueryParams();
	const value = useMemo(() => params[key], [key, params]);

	const setParam = useCallback(
		(newValue: string) => {
			const updated = {
				...params,
				[key]: newValue,
			};
			history.replace({
				search: qs.stringify(updated, {
					addQueryPrefix: true,
					encode: false,
				}),
			});
		},
		[key, params]
	);

	return [value as string | undefined, setParam];
}
