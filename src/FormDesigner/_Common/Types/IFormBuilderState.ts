import {IWidgetSchema} from "./IWidgetSchema.ts";
import {IOperationHistoryRecord} from "./IOperationHistoryRecord.tsx";
import {IWidget} from "./IWidget.ts";
import {IFormBuilderConfig} from "./IFormBuilderConfig.ts";
import {DatasourceListType} from "./DatasourceType.ts";
export interface IFormBuilderState  {
    // Schema数据
    schemas: IWidgetSchema [],
    // 当前选中的Schema ID
    selectedSchemaId: string | null,
    // 历史记录预览时选中的Schema ID
    historySelectedSchemaId: string | null,
    // 是否处于历史记录预览状态
    isHistoryPreview: boolean,
    // 历史记录
    schemaHistory: {
        // 过去的操作记录
        past: IOperationHistoryRecord [],
        // 未来可恢复的操作记录
        future: IOperationHistoryRecord []
    },
    // 选中的dock菜单
    activeDockKey: string | null,
    // 固定dock面板
    pinDockPanel: boolean,
    // 选中的屏幕
    activeScreen: string,

    // 拖动的组件
    draggedWidget: IWidget | null,
    // 拖动的组件Schema
    draggedSchema: IWidgetSchema | null,
    // 拖动的组件Schema的下标
    dragOverSchemaIndex: number | null,

    // 表单生成器的配置
    formBuilderConfig: IFormBuilderConfig

    datasource: DatasourceListType

}