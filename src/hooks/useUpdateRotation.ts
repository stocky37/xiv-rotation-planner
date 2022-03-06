import type {Action} from 'api/types';
import {useCallback} from 'react';

import useRotationActions from './useRotationActions';

// prefix i for item ids
const id = (action: Action): string => {
	switch (action.actionType) {
		case 'ability':
			return action.id;
		case 'item':
			return `i${action.id}`;
		default:
			throw new Error('Delays not handled yet');
	}
};

export default function useUpdateRotation(): [
	(action: Action) => void,
	(index: number) => void,
	() => void
] {
	const [rotation, setRotation] = useRotationActions();

	const appendAction = useCallback(
		(action: Action) => {
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
