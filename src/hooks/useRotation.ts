import type {Rotation} from 'api/types';
import {UseQueryResult} from 'react-query';
import {useRecoilState} from 'recoil';
import {rotationAtom} from 'util/atoms';

import useFetchRotation from './api/useFetchRotation';
import useJob from './useJob';

export default function useRotation(): UseQueryResult<Rotation> {
	const [job] = useJob();
	const [rotation] = useRecoilState(rotationAtom);
	return useFetchRotation({job, rotation});
}
