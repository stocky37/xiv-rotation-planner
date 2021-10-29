import {Stack, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import Action, {ActionProps, STANDARD_ACTION_SIZE} from 'components/Action';
import type {FC} from 'react';
import {TimedXIVAction} from 'util/types';

type Props = {
	action: TimedXIVAction;
	ogcdRatio?: number;
	gap?: number;
} & ActionProps;

const gcdStyle: SxProps = {
	marginTop: 1,
};

const ogcdStyle: SxProps = {};

const RotationAction: FC<Props> = ({
	size = STANDARD_ACTION_SIZE,
	action,
	duration = 250,
	ogcdRatio = 0.75,
	gap = 1,
	sx,
	...props
}) => {
	const ogcdSize = size * ogcdRatio;
	const gapSize = gap * 8; // default mui spacing, change if it is changed in theme
	return (
		<Stack
			sx={{
				...sx,
				marginLeft: `${action.ogcdGaps * (ogcdSize + gapSize)}px`,
			}}
		>
			<Action
				action={action}
				duration={duration}
				sx={action?.onGCD ? gcdStyle : ogcdStyle}
				size={action.onGCD ? size : size * ogcdRatio}
				{...props}
			/>
			{action?.onGCD ? <Typography textAlign="center">{action?.gcdNumber}</Typography> : null}
		</Stack>
	);
};

export default RotationAction;
