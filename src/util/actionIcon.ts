import {basename} from 'path';

export default function actionIcon(iconPath: string): string {
	return `${process.env.PUBLIC_URL}/images/actions/${basename(iconPath)}`;
}
