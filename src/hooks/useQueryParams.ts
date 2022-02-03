import qs, {ParsedQs} from 'qs';
import history from 'util/history';

export default function useQueryParams(): ParsedQs {
	return qs.parse(history.location.search, {ignoreQueryPrefix: true, parseArrays: false});
}
