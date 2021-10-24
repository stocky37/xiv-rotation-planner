import {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {getSelectedJob, jobAtom} from '../state/atoms';
import {useGetRecoilValueInfo_UNSTABLE} from 'recoil';
import {getQueryParams} from '../util/queryParams';

export function useJobId(): string {
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
