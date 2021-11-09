import {Box, Tooltip} from '@mui/material';
import {BoxProps, SxProps} from '@mui/system';
import {Image} from 'mui-image';
import type {FC} from 'react';
import {useDrag} from 'react-dnd';
import {XIVAction} from 'util/types';
import xivIcon from 'util/xivIcon';

export type ActionSize = 'medium' | 'large';

type SizesInPx = {
	[x in ActionSize]: number;
};

export const ActionSizesInPx: SizesInPx = {
	medium: 40,
	large: 64,
};

export type ActionProps = {
	action?: XIVAction;
	size?: ActionSize;
	duration?: number;
} & BoxProps;

const sizeStyle = (size: ActionSize): SxProps => {
	const sizePx = ActionSizesInPx[size];
	const overlaySizePx = Math.floor(sizePx * 1.2);
	const overlayShiftPx = Math.floor(sizePx / 20) * -1;

	return {
		position: 'relative',
		boxShadow: 2,
		margin: '1px',
		width: `${sizePx}px`,
		height: `${sizePx}px`,
		':hover': {
			cursor: 'pointer',
		},
		'&:after': {
			position: 'absolute',
			content: '""',
			display: 'block',
			zIndex: 2,
			background: `url(/images/action-overlay-${size}.png)`,
			height: `${overlaySizePx}px`,
			width: `${overlaySizePx}px`,
			top: overlayShiftPx,
			left: overlayShiftPx * 2,
		},
	};
};

const Action: FC<ActionProps> = ({action, size = 'medium', sx = {}, duration = 500, ...props}) => {
	const [{isDragging}, drag, preview] = useDrag(
		() => ({
			type: 'action',
			collect: (monitor) => {
				// console.log(monitor);
				return {
					isDragging: monitor.isDragging(),
					item: action,
				};
			},
		}),
		[]
	);

	return (
		<Tooltip title={action?.name ?? ''} disableInteractive>
			<Box
				sx={{
					...sizeStyle(size),
					...sx,
				}}
				{...props}
				ref={drag}
			>
				{action && (
					<Image
						src={xivIcon(action?.iconHD ?? '')}
						width={ActionSizesInPx[size]}
						height={ActionSizesInPx[size]}
						duration={duration}
					/>
				)}
			</Box>
		</Tooltip>
	);
};

export default Action;
