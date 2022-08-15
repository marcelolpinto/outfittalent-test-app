import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
      details
      flight_number
      launch_date_utc
      launch_success
      launch_year
      mission_name
      upcoming
      tbd
    }
  }
`;