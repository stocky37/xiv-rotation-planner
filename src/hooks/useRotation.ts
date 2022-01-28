import {useEffect, useMemo} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState, useRecoilValue} from 'recoil';
import {getRotation, rotationAtom} from 'util/atoms';
import {getRotationQueryParam} from 'util/queryParams';
import type {Action, Item, UsedAction} from 'util/types';

import useSelectedJob from './useSelectedJob';

type NormalisedActions = {
	[x: string]: Action | Item;
};

function normalise(actions: Array<Action | Item> = []): NormalisedActions {
	const lookup: NormalisedActions = {};
	actions.forEach((action: Action | Item) => {
		lookup[action.id] = action;
	});
	return lookup;
}

export default function useRotation(): UsedAction[] {
	const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
	const {isSet} = getRecoilValueInfo(rotationAtom);
	const [, setRotation] = useRecoilState(rotationAtom);

	const {isLoading, data} = useSelectedJob();
	const normalisedActions = useMemo(() => normalise(data?.actions), [data?.actions]);
	const normalisedPotions = useMemo(() => normalise(data?.potions), [data?.potions]);
	const queryParamValue = getRotationQueryParam();
	const rotation = useRecoilValue(getRotation);

	useEffect(() => {
		if (!isSet && queryParamValue && !isLoading && data) {
			setRotation(
				queryParamValue.map((id) => {
					if (id in normalisedActions) {
						return normalisedActions[id];
					} else {
						return normalisedPotions[id];
					}
				})
			);
		}
	});

	return rotation;
}
