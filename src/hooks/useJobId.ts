import {useEffect} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState, useRecoilValue} from 'recoil';

import {getSelectedJob, jobAtom} from '../state/atoms';
import {getQueryParams} from '../util/queryParams';

export default function useJobId(): string {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(jobAtom);
	const [, setJobId] = useRecoilState(jobAtom);
	const jobId = useRecoilValue(getSelectedJob);
	const queryParamValue = getQueryParams().job as string;

	useEffect(() => {
		if (!isSet && queryParamValue) {
			setJobId(queryParamValue);
		}
	}, [isSet, setJobId, queryParamValue]);

	return jobId;
}
