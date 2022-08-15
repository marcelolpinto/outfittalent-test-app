export type Maybe<T> = T | null;

export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Upload: any;
};

export type Launch = {
    __typename?: 'Launch';
    details?: Maybe<string>;
    flight_number?: Maybe<number>;
    launch_date_local?: Maybe<string>;
    launch_date_unix?: Maybe<number>;
    launch_date_utc?: Maybe<string>;
    launch_site?: Maybe<LaunchSite>;
    launch_success?: Maybe<boolean>;
    launch_year?: Maybe<number>;
    mission_id?: Maybe<Array<Maybe<string>>>;
    mission_name?: Maybe<string>;
    rocket?: Maybe<LaunchRocket>;
    tbd?: Maybe<boolean>;
    upcoming?: Maybe<boolean>;
};

export type LaunchSite = {
    __typename?: 'LaunchSite';
    site_id?: Maybe<string>;
    site_name?: Maybe<string>;
    site_name_long?: Maybe<string>;
};

export type LaunchRocket = {
    __typename?: 'LaunchRocket';
    rocket_id?: Maybe<string>;
    rocket_name?: Maybe<string>;
    rocket_type?: Maybe<string>;
};
