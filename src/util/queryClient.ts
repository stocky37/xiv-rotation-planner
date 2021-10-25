import {QueryClient} from 'react-query';
import {CACHE_STALE_TIME} from 'util/config';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: CACHE_STALE_TIME,
		},
	},
});
export default queryClient;
