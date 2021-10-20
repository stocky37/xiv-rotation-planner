import {XIVAPI_URL} from './constants';

export default function xivIcon(iconPath: string): string {
	return `${XIVAPI_URL}/${iconPath}`;
}
