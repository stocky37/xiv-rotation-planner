import type {Action, RotationRequestAction} from 'api/types';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {rotationAtom} from 'util/atoms';

export default function useUpdateRotation(): [
	(action: Action) => void,
	(index: number) => void,
	() => void
] {
	const [rotation, setRotation] = useRecoilState(rotationAtom);

	const appendAction = useCallback(
		(action: Action) => {
			const updated = [...rotation, toInput(action)];
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

function toInput(action: Action): RotationRequestAction {
	return {
		id: action.id,
		type: action.actionType,
	};
}
