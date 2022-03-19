import type {Action, ApiObject, Attribute} from './common';

export type ItemKind = 'arm' | 'tool' | 'armor' | 'accessory' | 'consumable' | 'material' | 'other';

export type Item = {
	kind: ItemKind;
	hdIcon: string;
	description: string;
} & ApiObject;

export type Bonus = {
	attribute: Attribute;
	value: number;
	max: number;
};

export type Consumable = {
	bonusDuration: number;
	bonuses?: Bonus[];
} & Action &
	Item;
