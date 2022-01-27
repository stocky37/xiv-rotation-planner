import {Box, CircularProgress, SelectChangeEvent} from '@mui/material';
import {SxProps} from '@mui/system';
import JobSelect from 'components/JobSelect';
import useJobs from 'hooks/useJobs';
import useSelectedJobId from 'hooks/useSelectedJobId';
import useSelectJob from 'hooks/useSelectJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import {FC, useCallback} from 'react';

type Props = {
	sx?: SxProps;
};

const SidebarJobSelect: FC<Props> = ({sx}) => {
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
		<Box sx={sx}>
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
		</Box>
	);
};

export default SidebarJobSelect;
