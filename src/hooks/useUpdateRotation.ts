import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {rotationAtom} from 'util/atoms';
import {updateRotationQueryParam} from 'util/queryParams';
import {XIVAction} from 'util/types';

export default function useUpdateRotation(): [
	(action: XIVAction) => void,
	(action: XIVAction, index: number) => void,
	() => void
] {
	const [rotation, setRawRotation] = useRecoilState(rotationAtom);

	const setRotation = useCallback(
		(actions) => {
			setRawRotation(actions);
			updateRotationQueryParam(actions);
		},
		[setRawRotation]
	);

	const appendAction = useCallback(
		(action: XIVAction) => {
			const updated = [...rotation, action];
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	const removeAction = useCallback(
		(action: XIVAction, index: number) => {
			const updated = [...rotation];
			updated.splice(index, 1);
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	const clearRotation = useCallback(() => {
		setRotation([]);
	}, [setRotation]);

	return [appendAction, removeAction, clearRotation];
}
