import {Box, CircularProgress, SelectChangeEvent} from '@mui/material';
import {SxProps} from '@mui/system';
import JobSelect from 'components/JobSelect';
import useFetchJobs from 'hooks/api/useFetchJobs';
import useJob from 'hooks/useJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import {FC, useCallback} from 'react';

type Props = {
	sx?: SxProps;
};

const SidebarJobSelect: FC<Props> = ({sx}) => {
	const {isLoading, data: jobs} = useFetchJobs();
	const [jobId, setJobId] = useJob();
	const [, , clearRotation] = useUpdateRotation();

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			setJobId(event.target.value);
			clearRotation();
		},
		[clearRotation, setJobId]
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
