export type QueryParameters = {
    filter?: any;
    aggregate?: any;
    groupeBy?: any;
    sort?: string;
    fields?: string;
    search?: string;
    limit?: string | number;
    offset?: string | number;
    page?: string;
    deep?: string;
    meta?: string;
    export?: string;
}