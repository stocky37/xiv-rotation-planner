import {Stack, Typography} from '@mui/material';
import ActionIcon, {actionSize} from 'components/ActionIcon';
import type {FC} from 'react';
import {UsedAction} from 'util/types';

type Props = {
	action: UsedAction;
	duration?: number;
	onClick?: () => void;
};

const RotationAction: FC<Props> = ({action, duration = 250, onClick}) => (
	<Stack
		sx={{
			gap: 0,
			marginTop: action.action.onGCD ? `${actionSize / 2}px` : 0,
		}}
	>
		<ActionIcon action={action.action} duration={duration} onClick={onClick} />
		{action.action.onGCD ? <Typography textAlign="center">{action.gcdNumber}</Typography> : null}
	</Stack>
);

export default RotationAction;
