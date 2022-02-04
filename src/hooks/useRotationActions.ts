import {useCallback, useMemo} from 'react';
import {rotationAtom} from 'util/atoms';
import {compress, decompress} from 'util/queryParams';

import useSyncedQueryParam from './useSyncedQueryParam';

export default function useRotationActions(): [string[], (newValue: string[]) => void] {
	const [param, setParam] = useSyncedQueryParam('rotation', rotationAtom);

	const actions = useMemo(() => (param ? decompress<string[]>(param) : []), [param]);
	const setActions = useCallback((newValue: string[]) => setParam(compress(newValue)), [setParam]);

	return [actions, setActions];
}
