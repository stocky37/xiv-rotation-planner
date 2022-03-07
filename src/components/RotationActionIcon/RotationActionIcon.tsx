import {Stack, Typography} from '@mui/material';
import type {TimelineAction} from 'api/types';
import ActionIcon from 'components/ActionIcon';
import type {FC} from 'react';

type Props = {
	action: TimelineAction;
	duration?: number;
	onClick?: () => void;
};

const RotationActionIcon: FC<Props> = ({action, duration = 250, onClick}) => {
	return (
		<Stack
			sx={{
				gap: 0,
				paddingTop: action.action.onGCD ? 3 : 0,
			}}
		>
			<ActionIcon
				action={action.action}
				duration={duration}
				onClick={onClick}
				size={action.action.onGCD ? 'm' : 's'}
			/>
			{action.action.onGCD ? <Typography textAlign="center">{action.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationActionIcon;
