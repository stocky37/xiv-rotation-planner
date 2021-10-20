export type Action = {
	id: number;
	name: string;
	category: string;
	description: string;
	icon: string;
	iconHD: string;
	comboFrom?: number;
	isGCD: boolean;
	cooldownGroup: number;
	recast: number;
	cast: number;
	isRoleAction: boolean;
	level: number;
};

export type GcdType = 'GCD' | 'oGCD';

export type TimelineAction = {
	gcdType: GcdType;
	timeline: number;
} & Action;
