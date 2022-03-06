import type {SelectProps} from '@mui/material';
import {ListItemIcon, ListItemText, ListSubheader, MenuItem, Select} from '@mui/material';
import type {Job} from 'api/types';
import JobIcon from 'components/JobIcon';
import type {FC} from 'react';
import {
	filterHealers,
	filterMeleeDps,
	filterRangedMagicDps,
	filterRangedPhysDps,
	filterTanks,
} from 'util/jobs';

type Props = {
	defaultValue?: string;
	jobs?: Job[];
} & SelectProps<string>;

const menuItem = (job: Job) => (
	<MenuItem key={job.id} value={job.id} sx={{textTransform: 'capitalize'}}>
		<ListItemIcon>
			<JobIcon job={job} variant="transparent" />
		</ListItemIcon>
		<ListItemText>{job.name}</ListItemText>
	</MenuItem>
);

const JobSelect: FC<Props> = ({defaultValue, jobs = [], ...props}) => (
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
		{...props}
	>
		<ListSubheader>Melee DPS</ListSubheader>
		{filterMeleeDps(jobs).map(menuItem)}
		<ListSubheader>Ranged Physical DPS</ListSubheader>
		{filterRangedPhysDps(jobs).map(menuItem)}
		<ListSubheader>Ranged Magical DPS</ListSubheader>
		{filterRangedMagicDps(jobs).map(menuItem)}
		<ListSubheader>Tanks</ListSubheader>
		{filterTanks(jobs).map(menuItem)}
		<ListSubheader>Healers</ListSubheader>
		{filterHealers(jobs).map(menuItem)}
	</Select>
);

export default JobSelect;
