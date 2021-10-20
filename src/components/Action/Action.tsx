import {Box} from '@mui/material';
import {Theme} from '@mui/material/styles';
import {SxProps} from '@mui/system';
import React, {FC} from 'react';
import type {XIVAction} from '../../util/types';
import xivIcon from '../../util/xivIcon';

export const DEFAULT_ACTION_SIZE = 40;

type Props = {
	action: XIVAction;
	size?: number;
	sx?: SxProps<Theme>;
};

const Action: FC<Props> = ({action, size = DEFAULT_ACTION_SIZE, sx = {}}) => {
	const boxStyle: SxProps<Theme> = {
		position: 'relative',
		userSelect: 'none',
		height: size,
		width: size,
		borderRadius: 1,
		'&:before': {
			position: 'absolute',
			content: '" "',
			width: '100%',
			height: '20%',
			top: 0,
			left: 0,
			borderRadius: 1,
			background: [
				'-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.6)), color-stop(100%, rgba(255, 255, 255, .15)))',
				'-moz-linear-gradient(top, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, .15) 100%)',
			],
		},
		'&:after': {
			position: 'absolute',
			content: '" "',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			borderRadius: 1,
			border: 1,
			boxShadow: 1,
		},
	};

	return (
		<Box sx={{...boxStyle, ...sx}}>
			<Box
				component="img"
				alt={action.name}
				src={xivIcon(action.iconHD)}
				height={size}
				width={size}
			/>
		</Box>
	);
};

export default Action;
