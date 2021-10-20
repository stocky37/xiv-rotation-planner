import {ACTION_DELAY} from './constants';
import {TimelineXIVAction, XIVAction} from './types';

export default function buildTimeline(
	actions: XIVAction[],
	gcd = 2500,
	actionDelay = ACTION_DELAY
): TimelineXIVAction[] {
	let nextGcd = 0;
	let nextOGcd = 0;

	return actions.map((action) => {
		let point: any = {...action};
		if (action.onGCD) {
			point.gcdType = 'GCD';
			point.timeline = nextGcd;
			nextOGcd = nextGcd + actionDelay;
			nextGcd += gcd;
		} else {
			point.gcdType = 'oGCD';
			point.timeline = nextOGcd;
			nextOGcd += actionDelay;
			if (nextOGcd > nextGcd) {
				nextGcd = nextOGcd;
			}
		}
		return point as TimelineXIVAction;
	});
}
