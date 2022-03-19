import type {Action} from './common';

export type TimelineAction = {
	action: Action;
	timestamp: number;
	gcdNumber?: number;
	// effects
};

export type RotationRequest = {
	actions: string[];
};

export type Rotation = {
	actions: TimelineAction[];
};
