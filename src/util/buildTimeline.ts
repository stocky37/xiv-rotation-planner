import {ACTION_DELAY} from './constants';
import {TimedXIVAction, XIVAction} from './types';

// if there is only one ogcd, assume it is weaved late
export default function buildTimeline(
	actions: XIVAction[],
	gcd = 2500,
	actionDelay = ACTION_DELAY
): TimedXIVAction[] {
	let nextGcd = 0;
	let nextOGcd = 0;
	let gcdNumber = 0;

	const timeline: TimedXIVAction[] = [];
	actions.forEach((action, index) => {
		let timestamp: number;
		let ogcdWindows = 0;

		const previousAction = actions[index - 1];
		const nextAction = actions[index + 1];

		if (action.onGCD) {
			if (previousAction?.onGCD) {
				ogcdWindows = 2;
			}
			gcdNumber++;
			timestamp = nextGcd;
			nextOGcd = nextGcd + actionDelay;
			nextGcd += gcd;
		} else {
			if (previousAction?.onGCD && nextAction?.onGCD) {
				ogcdWindows = 1;
			}
			timestamp = nextOGcd;
			nextOGcd += actionDelay;
			if (nextOGcd > nextGcd) {
				nextGcd = nextOGcd;
			}
		}

		timeline.push({
			...action,
			timestamp,
			index,
			gcdNumber,
			ogcdGaps: ogcdWindows,
		});
	});

	return timeline;
}
