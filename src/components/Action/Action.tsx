import {Tooltip} from '@mui/material';
import {Box, BoxProps} from '@mui/system';
import {Image} from 'mui-image';
import type {FC} from 'react';
import actionIcon from 'util/actionIcon';
import {XIVAction} from 'util/types';

export type ActionProps = {
	action?: XIVAction;
	duration?: number;
} & BoxProps;

export const actionSize = 46;

const style = {
	':hover': {
		cursor: 'pointer',
	},
};

const Action: FC<ActionProps> = ({action, sx = {}, duration = 500, ...props}) => (
	<Tooltip title={action?.name ?? ''} disableInteractive>
		<Box sx={{...style, ...sx}} {...props}>
			{action && (
				<Image
					src={actionIcon(action?.icon ?? '')}
					height={actionSize}
					width={actionSize}
					duration={duration}
					{...props}
				/>
			)}
		</Box>
	</Tooltip>
);

export default Action;
