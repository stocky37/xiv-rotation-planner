import {Card, CardContent, CardHeader, CircularProgress, Typography} from '@mui/material';
import Actions from 'components/Actions';
import useSelectedJob from 'hooks/useSelectedJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import type {FC} from 'react';

const JobActionsPanel: FC = () => {
	const {isLoading, data: job} = useSelectedJob();
	const [appendAction] = useUpdateRotation();
	return (
		<Card sx={{width: '100%'}}>
			<CardContent>
				<CardHeader title="Actions" sx={{paddingLeft: 0, paddingTop: 0}} />
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						<Typography color={'text.secondary'}>Job Actions</Typography>
						<Actions
							actions={job?.actions.filter((action) => !action.isRoleAction)}
							onClick={appendAction}
						/>
						<Typography color={'text.secondary'} sx={{marginTop: 2}}>
							Role Actions
						</Typography>
						<Actions
							actions={job?.actions.filter((action) => action.isRoleAction)}
							onClick={appendAction}
						/>
					</>
				)}
			</CardContent>
		</Card>
	);
};

export default JobActionsPanel;
