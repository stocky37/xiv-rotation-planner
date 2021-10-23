export type XIVAction = {
	id: string;
	name: string;
	category: string;
	description: string;
	icon: string;
	iconHD: string;
	comboFrom?: number;
	onGCD: boolean;
	cooldownGroups: number[];
	recast: number;
	cast: number;
	isRoleAction: boolean;
	level: number;
};

export type GcdType = 'GCD' | 'oGCD';

export type TimelineXIVAction = {
	gcdType: GcdType;
	timeline: number;
} & XIVAction;

export type JobCategory = 'dow' | 'dom' | 'doh' | 'dol';
export type JobType = 'class' | 'job';
export type JobRole = 'non-battle' | 'tank' | 'melee-dps' | 'ranged-dps' | 'healer';

export type Job = {
	id: string;
	name: string;
	abbreviation: string;
	icon: string;
	category: JobCategory;
	type: JobType;
	role: JobRole;
	index: number;
	isLimited: boolean;
};

export type JobWithAction = {
	actions: XIVAction[];
} & Job;
