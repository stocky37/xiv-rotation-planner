export type Attribute = 'strength' | 'dexterity' | 'vitality' | 'intelligence' | 'mind';

export type ApiObject = {
	id: string;
	name: string;
	icon: string;
	slug: string;
};

export type StatusEffect = {
	id: string;
	name: string;
	length: number;
};

export type ActionType = 'ability' | 'item' | 'delay';
export type Action = {
	onGCD: boolean;
	cast: number;
	recast: number;
	effects: StatusEffect[];
	actionType: ActionType;
	animationLock?: number;
} & ApiObject;
