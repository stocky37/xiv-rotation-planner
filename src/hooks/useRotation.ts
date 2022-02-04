import {UseQueryResult} from 'react-query';

import {Rotation} from '../util/types';
import useFetchRotation from './api/useFetchRotation';
import useRotationActions from './useRotationActions';

export default function useRotation(): UseQueryResult<Rotation> {
	const [actions] = useRotationActions();
	return useFetchRotation({actions});
}
