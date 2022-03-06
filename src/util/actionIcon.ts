import type {Action, ActionType} from 'api/types';

import basename from './basename';

function iconDir(actionType?: ActionType) {
	switch (actionType) {
		case 'item':
			return actionType;
		default:
			return 'action';
	}
}

export default function actionIcon(action: Action): string {
	return `${process.env.PUBLIC_URL}/images/${iconDir(action.actionType)}s/${basename(action.icon)}`;
}
