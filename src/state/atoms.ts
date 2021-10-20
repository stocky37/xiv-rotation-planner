import {atom, selector} from 'recoil';
import buildTimeline from '../util/buildTimeline';
import {TimelineXIVAction} from '../util/types';

export const rotationAtom = atom<TimelineXIVAction[]>({
	key: 'rotation',
	default: [],
});

export const getRotation = selector({
	key: 'getRotation',
	get: ({get}) => {
		return buildTimeline(get(rotationAtom));
	},
});
