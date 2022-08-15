import * as Apollo from '@apollo/client';
import { QUERY_LAUNCH_LIST } from './query';

export type LaunchListQuery = {
	__typename?: 'Query',
	launches?: Array<
		{
			__typename?: 'Launch',
			details?: string | null;
			flight_number?: number | null,
			mission_name?: string | null,
			launch_year?: number | null,
			launch_date_utc?: string | null,
			launch_success: boolean,
			upcoming: boolean,
		} | null
	> | null
};

export const useLaunchListQuery = () => {
	return Apollo.useQuery(QUERY_LAUNCH_LIST, {});
}