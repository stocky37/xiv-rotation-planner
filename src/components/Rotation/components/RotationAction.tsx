import {Stack, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import Action, {ActionProps} from 'components/Action';
import type {FC} from 'react';

type Props = {
	label: string;
} & ActionProps;

const gcdSx: SxProps = {
	marginTop: 1,
};

const ogcdSx: SxProps = {};

const RotationAction: FC<Props> = ({action, label, ...props}) => {
	return (
		<Stack>
			<Action action={action} sx={action?.onGCD ? gcdSx : ogcdSx} {...props} />
			{action?.onGCD ? <Typography textAlign="center">{label}</Typography> : null}
		</Stack>
	);
};

export default RotationAction;
