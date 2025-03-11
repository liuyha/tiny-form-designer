import {IWidgetSchema} from "./IWidgetSchema.ts";
import {SchemaOperationTypeEnum} from "../Enums/SchemaOperationTypeEnum.ts";

export interface IOperationHistoryRecord {
    // Schema数据
    schemas: IWidgetSchema [],

    // 操作记录信息
    operation: {
        // 操作类型
        type: SchemaOperationTypeEnum,
        // 操作类型名称
        name: string,
        // 操作时间
        timestamp: number,
        // 操作的组件
        schema?: IWidgetSchema
        // 操作前的Schema数据
        oldSchemas: IWidgetSchema []
    }
}