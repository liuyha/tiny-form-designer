import {FormBuilderStateActionEnum} from "../Enums/FormBuilderStateActionEnum.ts";
import {IWidgetSchema} from "./IWidgetSchema.ts";
import {
    AddDatasourceActionPayload,
    AddSchemaActionPayload, DeleteDatasourceActionPayload, DeleteSchemaActionPayload, ModifyDatasourceActionPayload,
    PushSchemaOperationRecordActionPayload, RecoverHistorySchemasActionPayload,
    SetActiveDockKeyActionPayload,
    SetActiveScreenActionPayload,
    SetDraggedWidgetActionPayload,
    SetDraggedWidgetSchemaActionPayload, SetDraggedWidgetSchemaIndexActionPayload, SetFormBuilderConfigActionPayload,
    SetPinDockPanelActionPayload,
    SetSchemasActionPayload
} from "../../Builder/Context/Reducers";

export type FormBuilderActionType =
    // 设置选中的dock菜单key
    | { type: FormBuilderStateActionEnum.SET_ACTIVE_DOCK_KEY, payload: SetActiveDockKeyActionPayload }
    // 设置选中的dock菜单key
    | { type: FormBuilderStateActionEnum.SET_PIN_DOCK_PANEL, payload: SetPinDockPanelActionPayload }
    // 设置选中的屏幕
    | { type: FormBuilderStateActionEnum.SET_ACTIVE_SCREEN, payload: SetActiveScreenActionPayload }
    // 设置表单Schema
    | { type: FormBuilderStateActionEnum.SET_SCHEMAS, payload: SetSchemasActionPayload }
    // 添加Schema
    | { type: FormBuilderStateActionEnum.ADD_SCHEMA, payload: AddSchemaActionPayload }
    // 删除Schema
    | { type: FormBuilderStateActionEnum.DELETE_SCHEMA, payload: DeleteSchemaActionPayload }
    // 修改Schema
    | { type: FormBuilderStateActionEnum.MODIFY_SCHEMA, payload: IWidgetSchema }
    // 移动Schema
    | { type: FormBuilderStateActionEnum.MOVE_SCHEMA, payload: { oldIndex: number; newIndex: number } }
    // 复制Schema
    | { type: FormBuilderStateActionEnum.COPY_SCHEMA, payload: IWidgetSchema }
    // 清空Schema
    | { type: FormBuilderStateActionEnum.CLEAR_SCHEMA, payload?: any }
    // 撤销操作
    | { type: FormBuilderStateActionEnum.UNDO, payload?: any }
    // 恢复操作
    | { type: FormBuilderStateActionEnum.REDO, payload?: any }
    // 设置当前选中的Schema
    | { type: FormBuilderStateActionEnum.SET_SELECTED_SCHEMA_ID, payload: string | null }
    // 设置历史记录预览时选中的Schema
    | { type: FormBuilderStateActionEnum.SET_HISTORY_SELECTED_SCHEMA_ID, payload: string | null }
    // 设置是否处于历史记录预览状态
    | { type: FormBuilderStateActionEnum.SET_HISTORY_PREVIEW, payload: boolean }
    // 设置拖动的组件
    | { type: FormBuilderStateActionEnum.SET_DRAGGED_WIDGET, payload: SetDraggedWidgetActionPayload }
    // 设置拖动的组件的Schema(画布上的组件)
    | { type: FormBuilderStateActionEnum.SET_DRAGGED_WIDGET_SCHEMA, payload: SetDraggedWidgetSchemaActionPayload }
    // 设置拖动的组件的Schema(画布上的组件)
    | { type: FormBuilderStateActionEnum.SET_DRAGOVER_SCHEMA_INDEX, payload: SetDraggedWidgetSchemaIndexActionPayload }
    // 添加Schema的操作记录
    | { type: FormBuilderStateActionEnum.PUSH_SCHEMA_OPERATION_RECORD, payload: PushSchemaOperationRecordActionPayload }
    // 设置表单生成器配置
    | { type: FormBuilderStateActionEnum.SET_FORM_BUILDER_CONFIG, payload?: SetFormBuilderConfigActionPayload }
    // 添加数据源
    | { type: FormBuilderStateActionEnum.ADD_DATASOURCE, payload: AddDatasourceActionPayload }
    // 删除数据源
    | { type: FormBuilderStateActionEnum.DELETE_DATASOURCE, payload: DeleteDatasourceActionPayload }
    // 修改数据源
    | { type: FormBuilderStateActionEnum.MODIFY_DATASOURCE, payload: ModifyDatasourceActionPayload }
    // 恢复历史记录中的schemas
    | { type: FormBuilderStateActionEnum.RECOVER_HISTORY_SCHEMAS, payload: RecoverHistorySchemasActionPayload }
    // 保存
    | { type: FormBuilderStateActionEnum.SAVE, payload?: any }