import {Ability} from './ability';
import {Item} from './item';

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

export type DetailedJob = {
	abilities: Ability[];
	potions: Item[];
} & Job;
