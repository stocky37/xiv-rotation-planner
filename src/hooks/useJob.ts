import type {UseQueryResult} from 'react-query';
import {useQuery} from 'react-query';
import {API_URL} from 'util/config';
import type {JobWithAction} from 'util/types';

export default function useJob(jobId: string): UseQueryResult<JobWithAction> {
	return useQuery(['jobs', jobId], () =>
		fetch(`${API_URL}/jobs/${jobId}`).then((res) => res.json())
	);
}
