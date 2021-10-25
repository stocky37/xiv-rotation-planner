import type {UseQueryResult} from 'react-query';
import {useQuery} from 'react-query';
import {API_URL} from 'util/config';
import type {Job} from 'util/types';

export default function useJobs(): UseQueryResult<Job[]> {
	return useQuery('jobs', () => fetch(`${API_URL}/jobs`).then((res) => res.json()));
}
