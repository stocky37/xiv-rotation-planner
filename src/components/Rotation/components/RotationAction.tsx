import {Stack, Typography} from '@mui/material';
import {Box} from '@mui/system';
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
				position: 'relative',
				marginRight: '40px',
			}}
		>
			<Box
				sx={{
					'&:after': {
						position: 'absolute',
						content: '""',
						display: 'block',
						zIndex: 0,
						background: `red`,
						height: `6px`,
						width: `40px`,
						top: '20px',
						right: '-40px',
						borderRadius: '1px',
					},
				}}
			>
				<Action action={action} duration={duration} {...props} />
			</Box>
			{action?.onGCD ? <Typography textAlign="center">{action?.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationAction;
