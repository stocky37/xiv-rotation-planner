import {UseQueryResult} from 'react-query';
import {JobWithAction} from 'util/types';

import useJob from './useJob';
import useSelectedJobId from './useSelectedJobId';

export default function useSelectedJob(): UseQueryResult<JobWithAction> {
	return useJob(useSelectedJobId());
}
