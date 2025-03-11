export enum DatasourceTypeEnum {
    custom = 'custom',
    static = 'static',
    dictionary = 'dictionary',
    api = 'api'
}


export const DATASOURCE_TYPE_MAP: Record<DatasourceTypeEnum, string> = {
    [DatasourceTypeEnum.custom]: '自定义',
    [DatasourceTypeEnum.static]: '静态数据',
    [DatasourceTypeEnum.dictionary]: '字典数据',
    [DatasourceTypeEnum.api]: '远程接口'
}