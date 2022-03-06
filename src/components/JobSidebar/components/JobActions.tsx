import {Box, CircularProgress, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import ActionIcon from 'components/ActionIcon';
import ActionIcons from 'components/ActionIcons';
import useSelectedJob from 'hooks/useSelectedJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import {FC} from 'react';

type Props = {
	sx?: SxProps;
};

const JobActions: FC<Props> = ({sx}) => {
	const {isLoading, data: job} = useSelectedJob();
	const [appendAction] = useUpdateRotation();

	return (
		<Box sx={sx}>
			<Typography color={'text.secondary'}>Job Actions</Typography>
			{isLoading ? (
				<CircularProgress />
			) : (
				<ActionIcons>
					{job?.abilities
						.filter((action) => !action.isRoleAction)
						.map((action) => (
							<ActionIcon
								key={action.id}
								action={action}
								onClick={() => {
									appendAction(action);
								}}
							/>
						))}
				</ActionIcons>
			)}
		</Box>
	);
};

export default JobActions;
