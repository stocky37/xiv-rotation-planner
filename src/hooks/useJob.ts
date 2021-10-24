import {useQuery} from 'react-query';
import {UseQueryResult} from 'react-query/types/react/types';
import {JobWithAction} from '../util/types';

export default function useJob(jobId: string): UseQueryResult<JobWithAction> {
	return useQuery(['jobs', jobId], () =>
		fetch(`http://localhost:8080/jobs/${jobId}`).then((res) => res.json())
	);
}
