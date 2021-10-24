import {useRecoilState} from 'recoil';

import {jobAtom} from '../state/atoms';
import {updateQueryParams} from '../util/queryParams';
import {Job} from '../util/types';

export default function useSetJob(): (job: Job | string) => void {
	const [, setJob] = useRecoilState(jobAtom);

	return (job: Job | string) => {
		const jobId = typeof job === 'string' ? job : job.id;
		setJob(jobId);
		updateQueryParams({job: jobId});
	};
}
