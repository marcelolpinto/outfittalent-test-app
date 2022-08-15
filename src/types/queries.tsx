import { Maybe } from ".";
import { Launch } from "./api";

export type LaunchListQuery = {
    __typename?: 'Query',
    launches?: Maybe<
        Array<
            ({ __typename?: 'Launch' } & Launch) | null
        >
    >
};