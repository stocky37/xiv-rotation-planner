import type {Action} from 'api/types';
import pluralize from 'pluralize';

import basename from './basename';

export default function actionIcon(action: Action, size = 'm'): string {
	return `${process.env.PUBLIC_URL}/images/${pluralize(action.actionType)}/${size}/${basename(
		action.icon
	)}`;
}
