import {Box, Grid} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC} from 'react';
import useJobActions from '../../hooks/useJobActions';
import buildTimeline from '../../util/buildTimeline';
import xivIcon from '../../util/xivIcon';
import ActionTimeline from '../ActionTimeline';

// @ts-ignore
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
	const chartData = [...buildTimeline(actions)];
	console.log({chartData});

	return (
		<>
			<Box sx={{maxWidth: '300px'}}>
				<Grid container spacing={1}>
					{data.actions.map((action: any) => (
						<Grid item key={action.id}>
							<img alt={action.name} src={xivIcon(action.icon)} />
						</Grid>
					))}
				</Grid>
			</Box>
			<ActionTimeline actions={chartData} />
		</>
	);
};

export default JobActions;
