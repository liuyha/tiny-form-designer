export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type ParamType = 'QUERY' | 'FORM' | 'JSON' | 'XML' | 'BINARY';

export interface HeaderItem {
    key: string;
    value: string;
    description?: string;
}

export interface Param {
    key: string;
    value: string;
    description?: string;
}

export interface IApi {
    url: string;
    method: HttpMethod;
    headers: HeaderItem[];
    paramType: ParamType;
    queryParams: Param[];
    formParams: Param[];
    cookies: Param[];
    bodyContent: string;
    description?: string;
}