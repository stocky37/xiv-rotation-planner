import {Box} from '@mui/material';
import type {SxProps} from '@mui/system';
import type {Job} from 'api/types';
import type {FC} from 'react';
import slugify from 'slugify';

type JobIconVariant = 'filled' | 'stroke' | 'transparent';

type Props = {
	job: Job;
	size?: string;
	sx?: SxProps;
	variant?: JobIconVariant;
};

type VariantExtensions = {
	[x in JobIconVariant]: string;
};

const exts: VariantExtensions = {
	filled: 'png',
	stroke: 'svg',
	transparent: 'png',
};

function iconString(job: Job, variant: JobIconVariant) {
	return `${process.env.PUBLIC_URL}/images/jobs/${variant}/${slugify(job.name)}.${exts[variant]}`;
}

const JobIcon: FC<Props> = ({job, size = '30px', sx, variant = 'filled'}) => (
	<Box
		component="img"
		alt={job.abbreviation}
		src={iconString(job, variant)}
		sx={{
			width: size,
			height: size,
			...sx,
		}}
	/>
);

export default JobIcon;
