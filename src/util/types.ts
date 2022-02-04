export type ActionCommon = {
	id: string;
	name: string;
	icon: string;
	description: string;
	recast: number;
	onGCD: boolean;
};

export type Action = {
	iconHD: string;
	comboFrom?: number;
	cooldownGroups: number[];
	cast: number;
	isRoleAction: boolean;
	level: number;
} & ActionCommon;

export type Attribute = 'strength' | 'dexterity' | 'vitality' | 'intelligence' | 'mind';

export type ItemBonus = {
	attribute: Attribute;
	value: number;
	max: number;
};

export type Item = {
	iconHD: string;
	bonusDuration: number;
	bonuses?: ItemBonus[];
} & ActionCommon;

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

export type EnrichedJob = {
	actions: Action[];
	potions: Item[];
} & Job;

export type TimelineAction = {
	action?: Action;
	item?: Item;
	timestamp: number;
	gcdNumber?: number;
};

export type Rotation = {
	actions: TimelineAction[];
};

export type RotationRequest = {
	actions: string[];
};
