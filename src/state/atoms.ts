import {atom, selector} from 'recoil';
import buildTimeline from '../util/buildTimeline';
import {DEFAULT_JOB} from '../util/constants';
import {XIVAction} from '../util/types';

export const jobAtom = atom<String>({
	key: 'job',
	default: DEFAULT_JOB,
});

export const getSelectedJob = selector({
	key: 'getJob',
	get: ({get}) => {
		return get(jobAtom) as string;
	},
});

export const rotationAtom = atom<XIVAction[]>({
	key: 'rotation',
	default: [],
});

export const getRotation = selector({
	key: 'getRotation',
	get: ({get}) => {
		return buildTimeline(get(rotationAtom));
	},
});
