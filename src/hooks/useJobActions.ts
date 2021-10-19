import {useQuery} from 'react-query';
import {UseQueryResult} from 'react-query/types/react/types';

export default function useJobActions(jobId: String): UseQueryResult<any> {
	return useQuery('sam', () =>
		fetch(`http://localhost:8080/jobs/${jobId}`).then((res) => res.json())
	);
}
