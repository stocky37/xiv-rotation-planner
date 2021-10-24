import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

import {rotationAtom} from '../state/atoms';
import {updateRotationQueryParam} from '../util/queryParams';
import {XIVAction} from '../util/types';

export default function useUpdateRotation(): [
	(action: XIVAction) => void,
	(action: XIVAction, index: number) => void
] {
	const [rotation, setRotation] = useRecoilState(rotationAtom);

	const appendAction = useCallback(
		(action: XIVAction) => {
			const updated = [...rotation, action];
			setRotation(updated);
			updateRotationQueryParam(updated);
		},
		[setRotation, rotation]
	);

	const removeAction = useCallback(
		(action: XIVAction, index: number) => {
			const updated = [...rotation];
			updated.splice(index, 1);
			updateRotationQueryParam(updated);
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	return [appendAction, removeAction];
}
