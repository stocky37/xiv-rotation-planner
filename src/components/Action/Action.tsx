import {Box, Tooltip} from '@mui/material';
import {Theme} from '@mui/material/styles';
import type {SxProps} from '@mui/system';
import type {FC} from 'react';

import type {XIVAction} from '../../util/types';
import xivIcon from '../../util/xivIcon';

export const DEFAULT_ACTION_SIZE = 40;

type Variant = 'default' | 'readonly';

type Props = {
	action: XIVAction;
	cursor?: boolean;
	size?: number;
	sx?: SxProps<Theme>;
	variant?: Variant;
	[x: string]: unknown;
};

const boxStyle: SxProps<Theme> = {
	position: 'relative',
	userSelect: 'none',
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

const defaultVariant: SxProps = {
	cursor: 'pointer',
	':hover': {
		opacity: 0.5,
	},
};

const readonlyVariant: SxProps = {};

type VariantStyle = {
	[x in Variant]: SxProps;
};

const styles: VariantStyle = {
	default: defaultVariant,
	readonly: readonlyVariant,
};

const Action: FC<Props> = ({
	action,
	size = DEFAULT_ACTION_SIZE,
	sx = {},
	variant = 'default',
	...props
}) => (
	<Tooltip title={action.name} disableInteractive>
		<Box sx={{...boxStyle, ...sx, height: size, width: size, ...styles[variant]}} {...props}>
			<Box
				component="img"
				alt={action.name}
				src={xivIcon(action.iconHD)}
				height={size}
				width={size}
			/>
		</Box>
	</Tooltip>
);

export default Action;
