import type {UseQueryResult} from 'react-query';
import {useQuery} from 'react-query';
import {API_URL} from 'util/config';

import type {Rotation, RotationRequest} from '../../util/types';

export default function useFetchRotation(req: RotationRequest): UseQueryResult<Rotation> {
	return useQuery(['rotation', req], () => {
		return fetch(`${API_URL}/rotation`, {
			method: 'POST',
			body: JSON.stringify(req),
			headers: {'Content-Type': 'application/json'},
		}).then((res) => {
			return res.json();
		});
	});
}
