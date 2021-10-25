import {Card, CardContent, CircularProgress, SelectChangeEvent} from '@mui/material';
import JobSelect from 'components/JobSelect';
import useJobs from 'hooks/useJobs';
import useSelectedJobId from 'hooks/useSelectedJobId';
import useSelectJob from 'hooks/useSelectJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';
import {useCallback} from 'react';

const JobSelectPanel: FC = () => {
	const {isLoading, data: jobs} = useJobs();
	const jobId = useSelectedJobId();
	const selectJob = useSelectJob();
	const [, , clearRotation] = useUpdateRotation();

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			selectJob(event.target.value);
			clearRotation();
		},
		[selectJob, clearRotation]
	);

	return (
		<Card sx={{width: '300px'}}>
			<CardContent
				sx={{
					':last-child': {
						paddingBottom: 1,
					},
				}}
			>
				{isLoading ? (
					<CircularProgress />
				) : (
					<JobSelect
						defaultValue={jobId}
						onChange={onSelectChange}
						jobs={jobs}
						fullWidth
						variant="standard"
					/>
				)}
			</CardContent>
		</Card>
	);
};

export default JobSelectPanel;
