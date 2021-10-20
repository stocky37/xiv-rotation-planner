import {Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import useJobActions from '../../hooks/useJobActions';
import {getRotation, rotationAtom} from '../../state/atoms';
import ActionGrid from '../ActionGrid';
import ActionTimeline from '../ActionTimeline';
import Rotation from '../Rotation';

const JobActions: FC = () => {
	const {isLoading, data} = useJobActions('34');
	const [rotation, setRotation] = useRecoilState(rotationAtom);
	const timeline = useRecoilValue(getRotation);

	if (isLoading) {
		return <CircularProgress />;
	}

	return (
		<Stack gap={10}>
			<ActionGrid actions={data.actions} />
			<Rotation
				actions={timeline}
				onActionClick={(action, index) => {
					const update = [...rotation];
					update.splice(index, 1);
					console.log('splicing', update);
					setRotation(update);
				}}
			/>
			<ActionTimeline actions={timeline} />
		</Stack>
	);
};

export default JobActions;
