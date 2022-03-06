import type {DetailedJob} from 'api/types';
import type {UseQueryResult} from 'react-query';
import {useQuery} from 'react-query';
import {API_URL} from 'util/config';

export default function useFetchJob(jobId: string): UseQueryResult<DetailedJob> {
	return useQuery(['jobs', jobId], () =>
		fetch(`${API_URL}/jobs/${jobId}`).then((res) => res.json())
	);
}
