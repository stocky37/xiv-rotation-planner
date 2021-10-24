import {Box} from '@mui/material';
import type {SxProps} from '@mui/system';
import type {FC} from 'react';

import type {Job} from '../../util/types';

type Props = {
	job: Job;
	size?: string;
	sx?: SxProps;
	variant?: 'filled' | 'svg' | 'transparent';
};

const iconString = {
	filled: (job: Job) => `/images/jobs/filled/${job.name.replaceAll(' ', '')}.png`,
	transparent: (job: Job) => `/images/jobs/transparent/${job.name.replaceAll(' ', '')}.png`,
	svg: (job: Job) => `/images/jobs/svg/class_job_0${job.id}.svg`,
};

const JobIcon: FC<Props> = ({job, size = '30px', sx, variant = 'svg'}) => (
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
