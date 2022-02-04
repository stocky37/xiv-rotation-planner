import {useCallback} from 'react';
import {Action, Item} from 'util/types';

import useRotationActions from './useRotationActions';

// prefix i for item ids
const id = (action: Action | Item) => {
	return action.hasOwnProperty('level') ? action.id : `i${action.id}`;
};

export default function useUpdateRotation(): [
	(action: Action | Item) => void,
	(index: number) => void,
	() => void
] {
	const [rotation, setRotation] = useRotationActions();

	const appendAction = useCallback(
		(action: Action | Item) => {
			const updated = [...rotation, id(action)];
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	const removeAction = useCallback(
		(index: number) => {
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
