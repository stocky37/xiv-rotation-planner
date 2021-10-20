import {ACTION_DELAY} from './constants';
import {Action, TimelineAction} from './types';

export default function buildTimeline(
	actions: Action[],
	gcd = 2500,
	actionDelay = ACTION_DELAY
): TimelineAction[] {
	let nextGcd = 0;
	let nextOGcd = 0;

	return actions.map((action) => {
		let point: any = {...action};
		if (action.isGCD) {
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
		return point as TimelineAction;
	});
}
