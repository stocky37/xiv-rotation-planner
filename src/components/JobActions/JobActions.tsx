import {Box, Grid} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC} from 'react';
import {VictoryChart, VictoryScatter, VictoryTheme, VictoryZoomContainer} from 'victory';
import useJobActions from '../../hooks/useJobActions';
import Graphrechart from './graphrechart';

const gcd = 2500;
const oGcd = 800;
const convertData = (actions: any[]) => {
	let nextGcdTime = 0;
	let nextOGcd = oGcd;
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
const Test = (props) => (
	<image
		x={props.x}
		y={props.datum.type === 'GCD' ? props.y - 40 : props.y}
		xlinkHref={`https://xivapi.com${props.datum.icon}`}
		height={40}
		width={40}
	/>
);

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
	const chartData = convertData(actions);

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
			<Graphrechart data={chartData} />
			<VictoryChart
				height={400}
				width={1200}
				theme={VictoryTheme.material}
				containerComponent={<VictoryZoomContainer responsive={false} />}
			>
				<VictoryScatter
					horizontal
					data={chartData}
					categories={{x: ['GCD', 'oGCD']}}
					y={'time'}
					x={'type'}
					scale="time"
					dataComponent={<Test />}
				></VictoryScatter>
			</VictoryChart>
		</>
	);
};

export default JobActions;
