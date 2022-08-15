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
    launch_success?: Maybe<boolean>;
    launch_year?: Maybe<number>;
    mission_id?: Maybe<Array<Maybe<string>>>;
    mission_name?: Maybe<string>;
    tbd?: Maybe<boolean>;
    upcoming?: Maybe<boolean>;
};