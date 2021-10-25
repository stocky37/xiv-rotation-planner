import {CircularProgress, Paper} from '@mui/material';
import Actions from 'components/Actions';
import useSelectedJob from 'hooks/useSelectedJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';

const JobActionsPanel: FC = () => {
	const {isLoading, data: job} = useSelectedJob();
	const [appendAction] = useUpdateRotation();
	return (
		<Paper elevation={3} sx={{padding: 1, width: '100%'}}>
			{isLoading ? <CircularProgress /> : <Actions actions={job?.actions} onClick={appendAction} />}
		</Paper>
	);
};

export default JobActionsPanel;
