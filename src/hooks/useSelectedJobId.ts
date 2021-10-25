import {useEffect} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState} from 'recoil';
import {jobAtom} from 'util/atoms';
import {getQueryParams} from 'util/queryParams';

export default function useSelectedJobId(): string {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(jobAtom);
	const [jobId, setJobId] = useRecoilState(jobAtom);
	const queryParamValue = getQueryParams().job as string;

	useEffect(() => {
		if (!isSet && queryParamValue) {
			setJobId(queryParamValue);
		}
	}, [isSet, setJobId, queryParamValue]);

	return jobId;
}
