import type {SelectChangeEvent} from '@mui/material';
import {ListItemIcon, ListItemText, ListSubheader, MenuItem, Select} from '@mui/material';
import type {FC} from 'react';

import {
	filterHealers,
	filterMeleeDps,
	filterRangedMagicDps,
	filterRangedPhysDps,
	filterTanks,
} from '../../util/jobs';
import type {Job} from '../../util/types';
import JobIcon from '../JobIcon';

type Props = {
	defaultValue: string;
	onChange?: (event: SelectChangeEvent) => void;
	jobs?: Job[];
};

const menuItem = (job: Job) => (
	<MenuItem key={job.id} value={job.id} sx={{textTransform: 'capitalize'}}>
		<ListItemIcon>
			<JobIcon job={job} variant="transparent" />
		</ListItemIcon>
		<ListItemText>{job.name}</ListItemText>
	</MenuItem>
);

const JobSelect: FC<Props> = ({defaultValue, onChange, jobs = []}) => (
	<Select
		value={defaultValue}
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
		onChange={onChange}
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

export default JobSelect;
