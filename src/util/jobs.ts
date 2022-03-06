import type {Job} from 'api/types';

function commonFilters(jobs: Job[]): Job[] {
	return jobs
		.filter((job) => !job.isLimited)
		.filter((job) => job.type === 'job')
		.sort((a, b) => a.index - b.index);
}

export function filterTanks(jobs: Job[]): Job[] {
	return commonFilters(jobs.filter((job) => job.role === 'tank'));
}

export function filterHealers(jobs: Job[]): Job[] {
	return commonFilters(jobs.filter((job) => job.role === 'healer'));
}

export function filterMeleeDps(jobs: Job[]): Job[] {
	return commonFilters(jobs.filter((job) => job.role === 'melee-dps'));
}

export function filterRangedPhysDps(jobs: Job[]): Job[] {
	return commonFilters(jobs.filter((job) => job.role === 'ranged-dps' && job.category === 'dow'));
}

export function filterRangedMagicDps(jobs: Job[]): Job[] {
	return commonFilters(jobs.filter((job) => job.role === 'ranged-dps' && job.category === 'dom'));
}

export function sortJobs(jobs: Job[]): Job[] {
	return [
		...filterTanks(jobs),
		...filterHealers(jobs),
		...filterMeleeDps(jobs),
		...filterRangedPhysDps(jobs),
		...filterRangedMagicDps(jobs),
	];
}
