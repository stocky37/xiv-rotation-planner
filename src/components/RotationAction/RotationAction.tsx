import {Stack, Typography} from '@mui/material';
import ActionIcon, {actionSize} from 'components/ActionIcon';
import type {FC} from 'react';

import type {TimelineAction} from '../../util/types';

type Props = {
	timelineAction: TimelineAction;
	duration?: number;
	onClick?: () => void;
};

const RotationAction: FC<Props> = ({timelineAction, duration = 250, onClick}) => {
	const action = timelineAction.action ?? timelineAction.item;
	return (
		<Stack
			sx={{
				gap: 0,
				paddingTop: action?.onGCD ? `${actionSize / 2}px` : 0,
			}}
		>
			<ActionIcon action={action} duration={duration} onClick={onClick} />
			{action?.onGCD ? (
				<Typography textAlign="center">{timelineAction.gcdNumber}</Typography>
			) : null}
		</Stack>
	);
};

export default RotationAction;
