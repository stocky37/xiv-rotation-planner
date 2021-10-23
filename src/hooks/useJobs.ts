import {useQuery} from 'react-query';
import {UseQueryResult} from 'react-query/types/react/types';
import {Job} from '../util/types';

export default function useJobs(): UseQueryResult<Job[]> {
	return useQuery('jobs', () => fetch(`http://localhost:8080/jobs`).then((res) => res.json()));
}
