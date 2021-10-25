import {useQuery, UseQueryResult} from 'react-query';
import {Job} from 'util/types';

export default function useJobs(): UseQueryResult<Job[]> {
	return useQuery('jobs', () => fetch(`http://localhost:8080/jobs`).then((res) => res.json()));
}
