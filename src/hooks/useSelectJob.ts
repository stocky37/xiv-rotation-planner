import useJob from 'hooks/useJob';
import {UseQueryResult} from 'react-query';
import {useRecoilState} from 'recoil';
import {jobAtom} from 'util/atoms';
import {updateQueryParams} from 'util/queryParams';
import {Job, JobWithAction} from 'util/types';

export default function useSelectJob(): [
	UseQueryResult<JobWithAction>,
	(job: Job | string) => void
] {
	const [selectedJobId, setJob] = useRecoilState(jobAtom);
	const queryResult = useJob(selectedJobId);

	return [
		queryResult,
		(job: Job | string) => {
			const jobId = typeof job === 'string' ? job : job.id;
			setJob(jobId);
			updateQueryParams({job: jobId});
		},
	];
}
