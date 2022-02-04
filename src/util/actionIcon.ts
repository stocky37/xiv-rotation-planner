import basename from './basename';
import type {Action, Item} from './types';

export default function actionIcon(action: Action | Item): string {
	const type: string = (action as Action).level !== undefined ? 'action' : 'item';
	return `${process.env.PUBLIC_URL}/images/${type}s/${basename(action.icon)}`;
}
