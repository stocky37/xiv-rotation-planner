import type {Action} from './common';

export type AbilityType = 'spell' | 'weaponskill' | 'ability';
export type DamageType = 'physical' | 'magical';

export type Ability = {
	level: number;
	abilityType: AbilityType;
	isRoleAction: boolean;
	damageType?: DamageType;
	comboFrom?: string;
	cooldownGroups: string[];
} & Action;
