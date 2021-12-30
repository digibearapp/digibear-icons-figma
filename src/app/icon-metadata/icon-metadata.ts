import { DbIconDefinition, DbIconName } from "@digibearapp/digibear-common-types";

export interface IconMetadataCollection {
    [key: string] : IconMetadata;
}

export interface IconMetadata {
    data: DbIconDefinition;
    categories: string[];
    tags: string[];
}