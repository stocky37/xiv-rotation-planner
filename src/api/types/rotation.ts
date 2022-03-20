import type {Action, ActionType} from './common';

export type TimelineAction = {
	action: Action;
	timestamp: number;
	gcdNumber?: number;
	// effects
};

export type RotationRequestAction = {
	type: ActionType;
	id?: string;
	duration?: number;
};

export type RotationRequest = {
	job: string;
	rotation: RotationRequestAction[];
};

export type Rotation = {
	rotation: TimelineAction[];
};
