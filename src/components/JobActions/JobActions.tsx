import {Box, Grid} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {Duration} from 'luxon';
import React, {FC} from 'react';
import {
	LineSegment,
	VictoryAxis,
	VictoryChart,
	VictoryScatter,
	VictoryTheme,
	VictoryZoomContainer,
} from 'victory';
import useJobActions from '../../hooks/useJobActions';

// @ts-ignore
const formatTick = (tick) => {
	const format = tick < 0 ? 's.S' : 'm:ss.S';
	const duration = Duration.fromMillis(tick).normalize();
	// const if(duration.as('seconds') >= 60)

	return duration.toFormat(format);
};

const ticks: number[] = [];
for (let i = -30; i < 120; i += 2.5) {
	ticks.push(i * 1000);
}

const gcd = 2500;
const oGcd = 800;
const convertData = (actions: any[], start = 0) => {
	let nextGcdTime = start;
	let nextOGcd = nextGcdTime + oGcd;
	return actions.map((x: any) => {
		let point;
		if (x.isGCD) {
			point = {
				icon: x.iconHD,
				type: 'GCD',
				time: nextGcdTime,
			};
			nextOGcd = nextGcdTime + oGcd;
			nextGcdTime += gcd;
		} else {
			point = {
				icon: x.iconHD,
				type: 'oGCD',
				time: nextOGcd,
			};
			nextOGcd += oGcd;
			if (nextOGcd > nextGcdTime) {
				nextGcdTime = nextOGcd;
			}
		}

		return point;
	});
};
// @ts-ignore
const Test = (props) => {
	const size = props.datum.type === 'oGCD' ? 30 : 40;
	return (
		<image
			x={props.x}
			y={props.datum.type === 'GCD' ? props.y - 40 : props.y}
			xlinkHref={`https://xivapi.com${props.datum.icon}`}
			height={size}
			width={size}
		/>
	);
};

function shuffleArray(array: any[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const JobActions: FC = () => {
	const {isLoading, data} = useJobActions('34');

	if (isLoading) {
		return <CircularProgress />;
	}

	const actions = [...data.actions];
	shuffleArray(actions);
	const chartData = [
		{icon: '/i/003000/003183_hr1.png', type: 'oGCD', time: -4000},
		...convertData(actions),
		...convertData(actions, 50000),
	];

	console.log(chartData);

	return (
		<>
			<Box sx={{maxWidth: '300px'}}>
				<Grid container spacing={1}>
					{data.actions.map((action: any) => (
						<Grid item key={action.id}>
							<img alt={action.name} src={`https://xivapi.com/${action.icon}`} />
						</Grid>
					))}
				</Grid>
			</Box>
			<VictoryChart
				height={150}
				width={1200}
				theme={VictoryTheme.material}
				containerComponent={<VictoryZoomContainer responsive={false} zoomDimension={'y'} />}
			>
				<VictoryAxis
					theme={VictoryTheme.material}
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
					theme={VictoryTheme.material}
					tickFormat={formatTick}
					scale="time"
					tickValues={ticks}
				/>
				<VictoryScatter
					horizontal
					data={chartData}
					categories={{x: ['GCD', 'oGCD']}}
					y={'time'}
					x={'type'}
					dataComponent={<Test />}
				></VictoryScatter>
			</VictoryChart>
		</>
	);
};

export default JobActions;
