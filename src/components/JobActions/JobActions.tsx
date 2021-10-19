import {Box, Grid} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC} from 'react';
import useJobActions from '../../hooks/useJobActions';
import Graphrechart from './graphrechart';

// const chartData = [
// 	{
// 		type: 'GCD',
// 		time: 0,
// 	},
// 	{
// 		type: 'GCD',
// 		time: 2500,
// 	},
// 	{
// 		type: 'GCD',
// 		time: 5000,
// 	},
// 	{
// 		type: 'oGCD',
// 		time: 5700,
// 	},
// 	{
// 		type: 'GCD',
// 		time: 7500,
// 	},
// 	{
// 		type: 'GCD',
// 		time: 10000,
// 	},
// 	{
// 		type: 'oGCD',
// 		time: 10700,
// 	},
// 	{
// 		type: 'oGCD',
// 		time: 11400,
// 	},
// 	{
// 		type: 'GCD',
// 		time: 12500,
// 	},
// ];

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
			<Graphrechart actions={actions} />
		</>
	);
};

export default JobActions;
