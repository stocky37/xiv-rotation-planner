import {ACTION_DELAY} from './constants';
import {GcdType, TimelineXIVAction, XIVAction} from './types';

export default function buildTimeline(
	actions: XIVAction[],
	gcd = 2500,
	actionDelay = ACTION_DELAY
): TimelineXIVAction[] {
	let nextGcd = 0;
	let nextOGcd = 0;

	return actions.map((action) => {
		let gcdType: GcdType;
		let timeline: number;

		if (action.onGCD) {
			gcdType = 'gcd';
			timeline = nextGcd;
			nextOGcd = nextGcd + actionDelay;
			nextGcd += gcd;
		} else {
			gcdType = 'ogcd';
			timeline = nextOGcd;
			nextOGcd += actionDelay;
			if (nextOGcd > nextGcd) {
				nextGcd = nextOGcd;
			}
		}
		return {
			...action,
			gcdType,
			timeline,
		};
	});
}
