import {Box, CircularProgress, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import Actions from 'components/Actions';
import useSelectedJob from 'hooks/useSelectedJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import {FC} from 'react';

type Props = {
	sx?: SxProps;
};

const RoleActions: FC<Props> = ({sx}) => {
	const {isLoading, data: job} = useSelectedJob();
	const [appendAction] = useUpdateRotation();

	return (
		<Box sx={sx}>
			<Typography color={'text.secondary'}>Role Actions</Typography>
			{isLoading ? (
				<CircularProgress />
			) : (
				<Actions
					actions={job?.actions.filter((action) => action.isRoleAction)}
					onClick={appendAction}
				/>
			)}
		</Box>
	);
};

export default RoleActions;
