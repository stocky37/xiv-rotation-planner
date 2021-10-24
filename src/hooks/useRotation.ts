import {useEffect, useMemo} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState, useRecoilValue} from 'recoil';
import {getRotation, rotationAtom} from '../state/atoms';
import buildTimeline from '../util/buildTimeline';
import {getRotationQueryParam} from '../util/queryParams';
import {TimelineXIVAction, XIVAction} from '../util/types';
import useJob from './useJob';
import {useJobId} from './useJobId';

type NormalisedActions = {
	[x: string]: XIVAction;
};

function normalise(actions: XIVAction[] = []): NormalisedActions {
	const lookup: NormalisedActions = {};
	actions.forEach((action) => {
		lookup[action.id] = action;
	});
	return lookup;
}

export function useRotation(): TimelineXIVAction[] {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(rotationAtom);
	const [, setRotation] = useRecoilState(rotationAtom);

	const {isLoading, data} = useJob(useJobId());
	const normalisedActions = useMemo(() => normalise(data?.actions), [data?.actions]);
	const queryParamValue = getRotationQueryParam();
	const rotation = useRecoilValue(getRotation) as TimelineXIVAction[];

	useEffect(() => {
		if (!isSet && queryParamValue && !isLoading && data) {
			setRotation(
				buildTimeline(
					queryParamValue.map((id) => {
						return normalisedActions[id];
					})
				)
			);
		}
	});

	return rotation;
}
