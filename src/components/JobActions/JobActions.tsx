import {Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC} from 'react';
import useJobActions from '../../hooks/useJobActions';
import buildTimeline from '../../util/buildTimeline';
import ActionGrid from '../ActionGrid';
import ActionTimeline from '../ActionTimeline';
import Rotation from '../Rotation';

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

	const shuffled = [...data.actions];
	shuffleArray(shuffled);
	const timeline = [...buildTimeline(shuffled)];
	console.log({chartData: timeline});

	return (
		<Stack gap={10}>
			<ActionGrid actions={data.actions} />
			<Rotation actions={shuffled} />
			<ActionTimeline actions={timeline} />
		</Stack>
	);
};

export default JobActions;
