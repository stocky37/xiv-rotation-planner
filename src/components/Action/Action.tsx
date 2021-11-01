import {Box, Tooltip} from '@mui/material';
import type {BoxProps, SxProps} from '@mui/system';
import {Image} from 'mui-image';
import type {FC} from 'react';
import type {XIVAction} from 'util/types';
import xivIcon from 'util/xivIcon';

export const STANDARD_ACTION_SIZE = 40;

type Variant = 'default' | 'readonly' | 'empty';

export type ActionProps = {
	action?: XIVAction;
	size?: number;
	variant?: Variant;
	duration?: number;
} & BoxProps;

const sharedStyle: SxProps = {
	position: 'relative',
	userSelect: 'none',
	borderRadius: 1,
	boxShadow: 2,
};

const actionStyle: SxProps = {
	...sharedStyle,
	'&:before': {
		position: 'absolute',
		content: '" "',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		borderRadius: 1,
		zIndex: 1,
		background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 10%);',
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
		zIndex: 2,
	},
};

const defaultVariant: SxProps = {
	...actionStyle,
	cursor: 'pointer',
	':hover': {
		opacity: 0.5,
	},
};

const emptyVariant: SxProps = {
	...sharedStyle,
	background: 'black',
	opacity: 0.25,
	border: 1,
};
const readonlyVariant: SxProps = {
	...actionStyle,
	opacity: 0.5,
};

type VariantStyle = {
	[x in Variant]: SxProps;
};

const styles: VariantStyle = {
	default: defaultVariant,
	readonly: readonlyVariant,
	empty: emptyVariant,
};

const Action: FC<ActionProps> = ({
	action,
	size = STANDARD_ACTION_SIZE,
	sx = {},
	variant = 'default',
	duration = 500,
	...props
}) => (
	<Tooltip title={action?.name ?? ''} disableInteractive>
		<Box
			sx={{...styles[variant], ...sx, height: size, minHeight: size, width: size, minWidth: size}}
			{...props}
		>
			{action && (
				<Image src={xivIcon(action?.iconHD ?? '')} width={size} height={size} duration={duration} />
			)}
		</Box>
	</Tooltip>
);

export default Action;
