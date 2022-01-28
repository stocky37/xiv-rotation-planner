import {UseQueryResult} from 'react-query';
import {EnrichedJob} from 'util/types';

import useJob from './useJob';
import useSelectedJobId from './useSelectedJobId';

export default function useSelectedJob(): UseQueryResult<EnrichedJob> {
	return useJob(useSelectedJobId());
}
