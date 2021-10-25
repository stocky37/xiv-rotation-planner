import {CircularProgress, Paper, SelectChangeEvent} from '@mui/material';
import JobSelect from 'components/JobSelect';
import useJobs from 'hooks/useJobs';
import useSelectedJobId from 'hooks/useSelectedJobId';
import useSelectJob from 'hooks/useSelectJob';
import type {FC} from 'react';
import {useCallback} from 'react';

const JobSelectPanel: FC = () => {
	const {isLoading, data: jobs} = useJobs();
	const jobId = useSelectedJobId();
	const selectJob = useSelectJob();

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			selectJob(event.target.value);
		},
		[selectJob]
	);

	return (
		<Paper elevation={3} sx={{padding: 1, width: '100%'}}>
			{isLoading ? (
				<CircularProgress />
			) : (
				<JobSelect defaultValue={jobId} onChange={onSelectChange} jobs={jobs} fullWidth />
			)}
		</Paper>
	);
};

export default JobSelectPanel;
