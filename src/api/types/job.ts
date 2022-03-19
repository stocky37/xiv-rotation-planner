import type {Ability} from './ability';
import type {ApiObject} from './common';
import type {Consumable} from './item';

export type JobCategory = 'dow' | 'dom' | 'doh' | 'dol';
export type JobType = 'class' | 'job';
export type JobRole = 'non-battle' | 'tank' | 'melee-dps' | 'ranged-dps' | 'healer';

export type Job = {
	abbreviation: string;
	category: JobCategory;
	type: JobType;
	role: JobRole;
	index: number;
	isLimited: boolean;
} & ApiObject;

export type DetailedJob = {
	abilities: Ability[];
	potions: Consumable[];
} & Job;
