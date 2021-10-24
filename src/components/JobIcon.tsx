import {Box} from '@mui/material';
import {SxProps} from '@mui/system';
import {FC} from 'react';

import type {Job} from '../util/types';

type Props = {
	job: Job;
	variant?: 'filled' | 'svg' | 'transparent';
	size?: string;
	sx?: SxProps;
};

const iconString = {
	filled: (job: Job) => `/images/jobs/filled/${job.name.replaceAll(' ', '')}.png`,
	transparent: (job: Job) => `/images/jobs/transparent/${job.name.replaceAll(' ', '')}.png`,
	svg: (job: Job) => `/images/jobs/svg/class_job_0${job.id}.svg`,
};

const JobIcon: FC<Props> = ({variant = 'svg', job, size = '30px', sx}) => (
	<Box
		component="img"
		alt={job.abbreviation}
		src={iconString[variant](job)}
		sx={{
			width: size,
			height: size,
			...sx,
		}}
	/>
);

export default JobIcon;
