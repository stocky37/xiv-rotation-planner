import {Stack, Typography} from '@mui/material';
import Action, {ActionProps, ActionSizesInPx} from 'components/Action';
import type {FC} from 'react';
import {TimedXIVAction} from 'util/types';

type Props = {
	action: TimedXIVAction;
	gap?: number;
} & ActionProps;

const RotationAction: FC<Props> = ({
	action,
	duration = 250,
	gap = 1,
	size = 'medium',
	sx,
	...props
}) => {
	return (
		<Stack
			sx={{
				...sx,
				marginLeft: `${action.ogcdGaps * (ActionSizesInPx[size] + gap * 8)}px`,
				marginTop: action?.onGCD ? `${ActionSizesInPx[size] / 2}px` : 0,
			}}
		>
			<Action action={action} duration={duration} {...props} />
			{action?.onGCD ? <Typography textAlign="center">{action?.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationAction;
