import {Stack, Typography} from '@mui/material';
import type {TimelineAction} from 'api/types';
import ActionIcon, {actionSize} from 'components/ActionIcon';
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
				paddingTop: action.action.onGCD ? `${actionSize / 2}px` : 0,
			}}
		>
			<ActionIcon action={action.action} duration={duration} onClick={onClick} />
			{action.action.onGCD ? <Typography textAlign="center">{action.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationActionIcon;
