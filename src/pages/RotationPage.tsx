import {Paper, Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC, useCallback} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Actions from '../components/ActionGrid';
import JobSelect from '../components/JobSelect';
import Rotation from '../components/Rotation';
import useJobActions from '../hooks/useJobActions';
import {getRotation, getSelectedJob, rotationAtom} from '../state/atoms';
import {XIVAction} from '../util/types';

const RotationPage: FC = () => {
	const selectedJob = useRecoilValue(getSelectedJob);
	const {isLoading, data} = useJobActions(selectedJob);
	const [rotation, setRotation] = useRecoilState(rotationAtom);
	const timeline = useRecoilValue(getRotation);

	const addAction = useCallback(
		(action: XIVAction) => {
			setRotation([...rotation, action]);
		},
		[rotation, setRotation]
	);

	const removeAction = useCallback(
		(action: XIVAction, index: number) => {
			const update = [...rotation];
			update.splice(index, 1);
			setRotation(update);
		},
		[rotation, setRotation]
	);

	if (isLoading || !data) {
		return <CircularProgress />;
	}

	return (
		<Stack gap={4} alignItems={'center'}>
			<JobSelect />
			<Paper elevation={3} sx={{padding: 1, maxWidth: 400}}>
				<Actions actions={data.actions} onClick={addAction} />
			</Paper>
			<Paper elevation={3} sx={{padding: 1}}>
				<Rotation actions={timeline} onActionClick={removeAction} />
			</Paper>
		</Stack>
	);
};

export default RotationPage;
