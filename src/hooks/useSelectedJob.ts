import {UseQueryResult} from 'react-query';
import {EnrichedJob} from 'util/types';

import useFetchJob from './api/useFetchJob';
import useJob from './useJob';

export default function useSelectedJob(): UseQueryResult<EnrichedJob> {
	return useFetchJob(useJob()[0]);
}
