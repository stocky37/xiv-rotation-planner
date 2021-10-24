import {Paper, SelectChangeEvent, Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, {FC, useCallback} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Actions from '../components/ActionGrid';
import JobSelect from '../components/JobSelect';
import Rotation from '../components/Rotation';
import {useJob} from '../hooks/useJob';
import useJobActions from '../hooks/useJobActions';
import useJobs from '../hooks/useJobs';
import {useSetJob} from '../hooks/useSetJob';
import {getRotation, rotationAtom} from '../state/atoms';
import {XIVAction} from '../util/types';

const RotationPage: FC = () => {
	const selectedJob = useJob();
	const setJob = useSetJob();
	const {isLoading: isLoadingJob, data: job} = useJobActions(selectedJob);
	const {isLoading: isLoadingJobs, data: jobs} = useJobs();
	const [rotation, setRotation] = useRecoilState(rotationAtom);
	const timeline = useRecoilValue(getRotation);

	const onSelectChange = useCallback(
		(event: SelectChangeEvent) => {
			setJob(event.target.value);
		},
		[setJob]
	);

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

	if (isLoadingJob || isLoadingJobs || !jobs) {
		return <CircularProgress />;
	}

	return (
		<Stack gap={4} alignItems={'center'}>
			<JobSelect defaultValue={selectedJob} onChange={onSelectChange} jobs={jobs} />
			<Paper elevation={3} sx={{padding: 1, maxWidth: 400}}>
				<Actions actions={job?.actions} onClick={addAction} />
			</Paper>
			<Paper elevation={3} sx={{padding: 1}}>
				<Rotation actions={timeline} onActionClick={removeAction} />
			</Paper>
		</Stack>
	);
};

export default RotationPage;
