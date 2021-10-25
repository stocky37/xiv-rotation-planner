import {useCallback, useEffect, useMemo} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState} from 'recoil';
import {rotationAtom} from 'util/atoms';
import buildTimeline from 'util/buildTimeline';
import {getRotationQueryParam, updateRotationQueryParam} from 'util/queryParams';
import {TimelineXIVAction, XIVAction} from 'util/types';

import useSelectJob from './useSelectJob';

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

export default function useRotation(): [
	TimelineXIVAction[],
	(action: XIVAction) => void,
	(action: XIVAction, index: number) => void
] {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(rotationAtom);
	const [rotation, setRotation] = useRecoilState(rotationAtom);

	const [{isLoading, data}] = useSelectJob();
	const normalisedActions = useMemo(() => normalise(data?.actions), [data?.actions]);
	const queryParamValue = getRotationQueryParam();

	useEffect(() => {
		if (!isSet && queryParamValue && !isLoading && data) {
			setRotation(buildTimeline(queryParamValue.map((id) => normalisedActions[id])));
		}
	});

	const appendAction = useCallback(
		(action: XIVAction) => {
			const updated = [...rotation, action];
			setRotation(updated);
			updateRotationQueryParam(updated);
		},
		[setRotation, rotation]
	);

	const removeAction = useCallback(
		(action: XIVAction, index: number) => {
			const updated = [...rotation];
			updated.splice(index, 1);
			updateRotationQueryParam(updated);
			setRotation(updated);
		},
		[setRotation, rotation]
	);

	const timeline = useMemo(() => buildTimeline(rotation), [rotation]);
	return [timeline, appendAction, removeAction];
}
