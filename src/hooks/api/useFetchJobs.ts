import type {Job} from 'api/types';
import type {UseQueryResult} from 'react-query';
import {useQuery} from 'react-query';
import {API_URL} from 'util/config';

export default function useFetchJobs(): UseQueryResult<Job[]> {
	return useQuery('jobs', () => fetch(`${API_URL}/jobs`).then((res) => res.json()));
}
