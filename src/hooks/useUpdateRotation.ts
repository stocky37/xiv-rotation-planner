import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {rotationAtom} from 'util/atoms';
import {updateRotationQueryParam} from 'util/queryParams';
import {Action, Item} from 'util/types';

export default function useUpdateRotation(): [
	(action: Action | Item) => void,
	(action: Action | Item, index: number) => void,
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
		(action: Action | Item) => {
			const updated = [...rotation, action];
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	const removeAction = useCallback(
		(action: Action | Item, index: number) => {
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
