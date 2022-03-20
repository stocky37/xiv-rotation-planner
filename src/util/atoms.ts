import type {RotationRequestAction} from 'api/types';
import {atom} from 'recoil';
import {DEFAULT_JOB} from 'util/constants';

export const jobAtom = atom<string>({
	key: 'job',
	default: DEFAULT_JOB,
});

export const rotationAtom = atom<RotationRequestAction[]>({
	key: 'rotation',
	default: [],
});
