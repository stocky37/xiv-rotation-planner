import {Stack, Typography} from '@mui/material';
import Action, {ActionProps, actionSize} from 'components/Action';
import type {FC} from 'react';
import {TimedXIVAction} from 'util/types';

type Props = {
	action: TimedXIVAction;
} & ActionProps;

const RotationAction: FC<Props> = ({action, duration = 250, sx, ...props}) => {
	return (
		<Stack
			sx={{
				...sx,
				marginTop: action?.onGCD ? `${actionSize / 2}px` : 0,
			}}
		>
			<Action action={action} duration={duration} {...props} />
			{action?.onGCD ? <Typography textAlign="center">{action?.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationAction;
