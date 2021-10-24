import {useRecoilValue} from 'recoil';
import {getSelectedJob, jobAtom} from '../state/atoms';
import {useGetRecoilValueInfo_UNSTABLE} from 'recoil';
import {getQueryParams} from '../util/queryParams';

export function useJob(): string {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(jobAtom);
	const stateValue = useRecoilValue(getSelectedJob) as string;
	const queryParamValue = getQueryParams().job as string;
	return isSet || !queryParamValue ? stateValue : queryParamValue;
}
