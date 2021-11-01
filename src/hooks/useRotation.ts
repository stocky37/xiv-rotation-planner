import {useEffect, useMemo} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState, useRecoilValue} from 'recoil';
import {getRotation, rotationAtom} from 'util/atoms';
import buildTimeline from 'util/buildTimeline';
import {getRotationQueryParam} from 'util/queryParams';
import type {TimedXIVAction, XIVAction} from 'util/types';

import useSelectedJob from './useSelectedJob';

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

export default function useRotation(): TimedXIVAction[] {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(rotationAtom);
	const [, setRotation] = useRecoilState(rotationAtom);

	const {isLoading, data} = useSelectedJob();
	const normalisedActions = useMemo(() => normalise(data?.actions), [data?.actions]);
	const queryParamValue = getRotationQueryParam();
	const rotation = useRecoilValue(getRotation);

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
