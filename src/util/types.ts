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
