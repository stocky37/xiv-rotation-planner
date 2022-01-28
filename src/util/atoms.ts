import {atom, selector} from 'recoil';
import buildTimeline from 'util/buildTimeline';
import {DEFAULT_JOB} from 'util/constants';
import {Action, Item} from 'util/types';

export const jobAtom = atom<string>({
	key: 'job',
	default: DEFAULT_JOB,
});

export const rotationAtom = atom<Array<Action | Item>>({
	key: 'rotation',
	default: [],
});

export const getRotation = selector({
	key: 'getRotation',
	get: ({get}) => buildTimeline(get(rotationAtom)),
});
