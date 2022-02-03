import {useCallback, useEffect} from 'react';
import {RecoilState, useGetRecoilValueInfo_UNSTABLE, useRecoilState} from 'recoil';

import useQueryParam from './useQueryParam';

export default function useSyncedQueryParam(
	key: string,
	atom: RecoilState<string>
): [string, (newValue: string) => void] {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(atom);
	const [value, setValue] = useRecoilState<string>(atom);
	const [queryParamValue, setQueryParam] = useQueryParam(key);
	const setSyncedValue = useCallback(
		(newValue: string) => {
			setValue(newValue);
			setQueryParam(newValue);
		},
		[setQueryParam, setValue]
	);

	useEffect(() => {
		if (!isSet && queryParamValue) {
			setValue(queryParamValue);
		}
	});

	return [value, setSyncedValue];
}
