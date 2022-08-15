import * as Apollo from '@apollo/client';
import { QUERY_LAUNCH_LIST } from './query';

export const useLaunchListQuery = () => {
	return Apollo.useQuery(QUERY_LAUNCH_LIST);
}