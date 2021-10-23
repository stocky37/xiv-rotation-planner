import {
	Box,
	CircularProgress,
	ListItemAvatar,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	MenuItem,
	Select,
} from '@mui/material';
import React, {FC} from 'react';
import {useRecoilState} from 'recoil';
import useJobs from '../../hooks/useJobs';
import {jobAtom} from '../../state/atoms';
import {
	filterHealers,
	filterMeleeDps,
	filterRangedMagicDps,
	filterRangedPhysDps,
	filterTanks,
} from '../../util/jobs';
import {Job} from '../../util/types';
import JobIcon from '../JobIcon';

type Props = {};

const menuItem = (job: Job) => {
	return (
		<MenuItem key={job.id} value={job.id} sx={{textTransform: 'capitalize'}}>
			<ListItemIcon>
				<JobIcon job={job} variant={'transparent'} />
			</ListItemIcon>
			<ListItemText>{job.name}</ListItemText>
		</MenuItem>
	);
};

const JobSelect: FC<Props> = ({}) => {
	const {isLoading, data: jobs} = useJobs();
	const [selectedJob, setJob] = useRecoilState(jobAtom);

	if (isLoading || !jobs) {
		return <CircularProgress />;
	}

	return (
		<Select
			value={selectedJob}
			autoWidth
			sx={{textTransform: 'capitalize'}}
			inputProps={{
				sx: {
					display: 'flex',
					'.MuiListItemIcon-root': {
						minWidth: '36px',
					},
				},
			}}
			onChange={(event) => {
				setJob(event.target.value);
			}}
		>
			<ListSubheader>Tanks</ListSubheader>
			{filterTanks(jobs).map(menuItem)}
			<ListSubheader>Healers</ListSubheader>
			{filterHealers(jobs).map(menuItem)}
			<ListSubheader>Melee DPS</ListSubheader>
			{filterMeleeDps(jobs).map(menuItem)}
			<ListSubheader>Ranged Physical DPS</ListSubheader>
			{filterRangedPhysDps(jobs).map(menuItem)}
			<ListSubheader>Ranged Magical DPS</ListSubheader>
			{filterRangedMagicDps(jobs).map(menuItem)}
		</Select>
	);
};

export default JobSelect;
