import {Tooltip} from '@mui/material';
import {Box, BoxProps} from '@mui/system';
import type {Action} from 'api/types';
import {Image} from 'mui-image';
import type {FC} from 'react';
import actionIcon from 'util/actionIcon';

export type ActionIconProps = {
	action?: Action;
	duration?: number;
	size?: 'm' | 's';
} & BoxProps;

export const sizes = {
	m: 46,
	s: 35,
};

const style = {
	':hover': {
		cursor: 'pointer',
	},
};

const ActionIcon: FC<ActionIconProps> = ({
	action,
	sx = {},
	duration = 500,
	size = 'm',
	...props
}) => {
	return (
		<Tooltip title={action?.name ?? ''} disableInteractive>
			<Box sx={{...style, ...sx}} {...props}>
				{action && (
					<Image
						src={actionIcon(action, size)}
						height={sizes[size]}
						width={sizes[size]}
						duration={duration}
						{...props}
					/>
				)}
			</Box>
		</Tooltip>
	);
};

export default ActionIcon;
