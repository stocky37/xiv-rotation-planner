import {Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import React, {FC} from 'react';
import {TimelineXIVAction} from '../../util/types';
import Action from '../Action';
import {DEFAULT_ACTION_SIZE} from '../Action/Action';

type Props = {
	actions: TimelineXIVAction[];
	size?: number;
	oGcdOffset?: number | string;
	oGcdRatio?: number;
};

const Rotation: FC<Props> = ({
	actions,
	size = DEFAULT_ACTION_SIZE,
	oGcdRatio = 0.8,
	oGcdOffset = 1,
}) => {
	const gcdStyle: SxProps = {
		marginBottom: 1,
		marginTop: oGcdOffset,
	};

	return (
		<Stack direction="row" gap={0.25} flexWrap={'wrap'}>
			{actions.map((action: any) => (
				<Action
					action={action}
					sx={action.isGCD ? gcdStyle : {}}
					size={action.isGCD ? size : size * oGcdRatio}
				/>
			))}
		</Stack>
	);
};

export default Rotation;
