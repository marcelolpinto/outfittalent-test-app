import { Maybe } from ".";

export type Launch = {
    __typename?: 'Launch';
    details?: Maybe<string>;
    flight_number?: Maybe<number>;
    launch_date_utc?: Maybe<string>;
    launch_year?: Maybe<number>;
    mission_name?: Maybe<string>;
    launch_success: boolean;
    upcoming: boolean;
};