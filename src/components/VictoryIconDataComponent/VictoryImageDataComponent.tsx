import React, {FC} from 'react';

// data, datum, index, origin, polar,scale, size, style, symbol, x, y
export type Point = {
	x?: number;
	y?: number;
};

type DataComponentProps = {
	data?: any[];
	datum?: any;
} & Point;

type Props = {
	imageSize?: number | ((datum: any) => number);
	imageUrl: (datum: any) => string;
	modPoint: (point: Point, datum: any, size: number) => Point;
} & DataComponentProps;

const noopModPoint = (point: Point): Point => {
	return point;
};

const VictoryImageDataComponent: FC<Props> = ({
	datum,
	x,
	y,
	imageSize = 40,
	imageUrl,
	modPoint = noopModPoint,
}) => {
	const size = typeof imageSize === 'function' ? imageSize(datum) : imageSize;
	return (
		<image
			{...modPoint({x, y}, datum, size)}
			xlinkHref={imageUrl(datum)}
			height={size}
			width={size}
		/>
	);
};

export default VictoryImageDataComponent;
