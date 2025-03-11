import {DatasourceTypeEnum} from "../Enums/DatasourceTypeEnum.ts";
import {IApi} from "./ApiType.ts";

export interface IBaseDatasource {
    id?: string
    name: string
    type: DatasourceTypeEnum
    description: string
    version: number
}

/**  静态数据类型  **/
export interface IStaticDatasource extends IBaseDatasource {
    data: {
        label: string,
        value: any
    } []
}


/**
 * 字典数据项
 */
export interface IDictionaryItem {
    code: string,
    label: string,
    value: any
}

export interface IDictionary {
    code: string
    name: string
    items: IDictionaryItem[]
}

/**  数据字典类型  **/
export interface IDictionaryDatasource extends IBaseDatasource {
    data: IDictionary []
}



export interface IApiDatasource extends IBaseDatasource {
    data: IApi []
}



export type DatasourceType = (IStaticDatasource | IDictionaryDatasource | IApiDatasource)


export type DatasourceListType = DatasourceType []
