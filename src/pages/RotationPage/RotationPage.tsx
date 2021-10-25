import {CircularProgress, Paper, SelectChangeEvent, Stack} from '@mui/material';
import Actions from 'components/Actions';
import JobSelect from 'components/JobSelect';
import Rotation from 'components/Rotation';
import useJobs from 'hooks/useJobs';
import useRotation from 'hooks/useRotation';
import useSelectJob from 'hooks/useSelectJob';
import type {FC} from 'react';
import {useCallback} from 'react';

const RotationPage: FC = () => {
	const [{isLoading: isLoadingJob, data: job}, selectJob] = useSelectJob();
	const {isLoading: isLoadingJobs, data: jobs} = useJobs();
	const [timeline, appendAction, removeAction] = useRotation();

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			selectJob(event.target.value);
		},
		[selectJob]
	);

	if (isLoadingJob || isLoadingJobs || !jobs) {
		return <CircularProgress />;
	}

	return (
		<Stack gap={4} alignItems="center">
			<JobSelect defaultValue={job?.id} onChange={onSelectChange} jobs={jobs} />
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
