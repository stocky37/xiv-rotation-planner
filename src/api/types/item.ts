import {Action} from './action';
import {Attribute} from './common';

export type ItemBonus = {
	attribute: Attribute;
	value: number;
	max: number;
};

export type Item = {
	iconHD: string;
	bonusDuration: number;
	bonuses?: ItemBonus[];
} & Action;
