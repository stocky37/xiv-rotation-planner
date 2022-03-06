import type {DetailedJob} from 'api/types';
import {UseQueryResult} from 'react-query';

import useFetchJob from './api/useFetchJob';
import useJob from './useJob';

export default function useSelectedJob(): UseQueryResult<DetailedJob> {
	return useFetchJob(useJob()[0]);
}
