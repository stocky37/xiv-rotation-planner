import {Paper, SelectChangeEvent, Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {FC, useCallback} from 'react';

import Actions from '../components/ActionGrid';
import JobSelect from '../components/JobSelect';
import Rotation from '../components/Rotation';
import useJob from '../hooks/useJob';
import useJobId from '../hooks/useJobId';
import useJobs from '../hooks/useJobs';
import useRotation from '../hooks/useRotation';
import useSetJob from '../hooks/useSetJob';
import useUpdateRotation from '../hooks/useUpdateRotation';

const RotationPage: FC = () => {
	const selectedJob = useJobId();
	const setJob = useSetJob();
	const {isLoading: isLoadingJob, data: job} = useJob(selectedJob);
	const {isLoading: isLoadingJobs, data: jobs} = useJobs();
	const [appendAction, removeAction] = useUpdateRotation();
	const timeline = useRotation();

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			setJob(event.target.value);
		},
		[setJob]
	);

	if (isLoadingJob || isLoadingJobs || !jobs) {
		return <CircularProgress />;
	}

	return (
		<Stack gap={4} alignItems="center">
			<JobSelect defaultValue={selectedJob} onChange={onSelectChange} jobs={jobs} />
			<Paper elevation={3} sx={{padding: 1, maxWidth: 400}}>
				<Actions actions={job?.actions} onClick={appendAction} />
			</Paper>
			<Paper elevation={3} sx={{padding: 1}}>
				<Rotation actions={timeline} onActionClick={removeAction} />
			</Paper>
		</Stack>
	);
};

export default RotationPage;
