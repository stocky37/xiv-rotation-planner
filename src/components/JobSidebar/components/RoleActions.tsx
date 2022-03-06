import {Box, CircularProgress, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import ActionIcons from 'components/ActionIcons';
import useSelectedJob from 'hooks/useSelectedJob';
import useUpdateRotation from 'hooks/useUpdateRotation';
import {FC} from 'react';

import ActionIcon from '../../ActionIcon';

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
				<ActionIcons>
					{job?.abilities
						.filter((action) => action.isRoleAction)
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

export default RoleActions;
