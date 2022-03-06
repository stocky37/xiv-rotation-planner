import type {Job} from 'api/types';
import {useCallback} from 'react';
import {jobAtom} from 'util/atoms';

import useSyncedQueryParam from './useSyncedQueryParam';

export default function useJob(): [string, (job: Job | string) => void] {
	const [param, setParam] = useSyncedQueryParam('job', jobAtom);
	const setJob = useCallback(
		(job: Job | string) => setParam(typeof job === 'string' ? job : job.abbreviation),
		[setParam]
	);
	return [param, setJob];
}
