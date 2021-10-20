import {Box} from '@mui/material';
import {Duration} from 'luxon';
import React, {FC, useCallback, useState} from 'react';
import {
	LineSegment,
	VictoryAxis,
	VictoryChart,
	VictoryScatter,
	VictoryTheme,
	VictoryZoomContainer,
} from 'victory';
import {VictoryThemeDefinition} from 'victory-core';
import {TimelineAction} from '../../util/types';
import xivIcon from '../../util/xivIcon';
import type {Point} from '../VictoryIconDataComponent';
import VictoryImageDataComponent from '../VictoryIconDataComponent';

type Props = {
	actions: TimelineAction[];
	gcd?: number;
	height?: number;
	width?: number | string;
	theme?: VictoryThemeDefinition;
};

const formatTick = (tick: any): string => {
	const format = tick < 0 ? 's.S' : 'm:ss.S';
	const duration = Duration.fromMillis(tick).normalize();
	return duration.toFormat(format);
};

const getActionIconUrl = (datum: any): string => {
	return xivIcon(datum.iconHD);
};

const modImagePoint = (point: Point, datum: TimelineAction, size: number): Point => {
	const x = (point.x ?? 0) - size / 2;
	const y = datum.isGCD ? (point.y ?? 0) - size : point.y;
	return {x, y};
};

const getTicks = (timeline: number, gcd: number): number[] => {
	let ticks: number[] = [];
	for (let i = 0; i <= timeline; i += gcd) {
		ticks.push(i);
	}
	return ticks;
};

const ActionTimeline: FC<Props> = ({
	actions,
	height = 150,
	width = 600,
	theme = VictoryTheme.material,
	gcd = 2500,
}) => {
	const [boundingRect, setBoundingRect] = useState({width: 0, height: 0});
	const graphRef = useCallback((node) => {
		if (node !== null) {
			setBoundingRect(node.getBoundingClientRect());
		}
	}, []);

	return (
		<Box sx={{cursor: 'pointer', width: '100%'}} ref={graphRef}>
			<VictoryChart
				height={height}
				width={boundingRect.width}
				theme={theme}
				containerComponent={
					<VictoryZoomContainer
						responsive={false}
						zoomDimension={'y'}
						// zoomDomain={{y: [0, 20000]}}
					/>
				}
			>
				<VictoryAxis
					theme={theme}
					style={{
						axis: {stroke: 'black'},
						ticks: {stroke: 'transparent'},
						tickLabels: {fill: 'transparent'},
					}}
					crossAxis
				/>
				<VictoryAxis
					dependentAxis
					tickComponent={<LineSegment />}
					theme={theme}
					scale="time"
					tickFormat={formatTick}
					tickValues={getTicks(actions.slice(-1)[0].timeline, gcd)}
				/>
				<VictoryScatter
					horizontal
					theme={theme}
					y={'timeline'}
					x={'gcdType'}
					data={actions}
					categories={{x: ['GCD', 'oGCD']}}
					dataComponent={
						<VictoryImageDataComponent
							imageSize={40}
							imageUrl={getActionIconUrl}
							modPoint={modImagePoint}
						/>
					}
				/>
			</VictoryChart>
		</Box>
	);
};

export default ActionTimeline;
