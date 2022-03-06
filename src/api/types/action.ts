import {Base} from './common';

export type ActionType = 'ability' | 'item' | 'delay';

export type StatusEffect = {
	id: string;
	name: string;
	length: number;
};

export type Action = {
	onGCD: boolean;
	cast: number;
	recast: number;
	effects: StatusEffect[];
	animationLock?: number;
	actionType?: ActionType;
} & Base;
