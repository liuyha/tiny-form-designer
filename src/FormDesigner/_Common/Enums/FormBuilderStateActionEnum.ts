/**
 * 表单设计器状态操作枚举
 */
export enum FormBuilderStateActionEnum {
    // 设置选中的dock菜单key
    SET_ACTIVE_DOCK_KEY = 'SET_ACTIVE_DOCK_KEY',
    // 设置dock面板固定状态
    SET_PIN_DOCK_PANEL = 'SET_PIN_DOCK_PANEL',
    // 设置选中的屏幕
    SET_ACTIVE_SCREEN = 'SET_ACTIVE_SCREEN',
    // 设置表单Schema
    SET_SCHEMAS = 'SET_SCHEMAS',
    // 添加Schema
    ADD_SCHEMA = 'ADD_SCHEMA',
    // 删除Schema
    DELETE_SCHEMA = 'DELETE_SCHEMA',
    // 修改Schema
    MODIFY_SCHEMA = 'MODIFY_SCHEMA',
    // 移动Schema
    MOVE_SCHEMA = 'MOVE_SCHEMA',
    // 复制Schema
    COPY_SCHEMA = 'COPY_SCHEMA',
    // 清空Schema
    CLEAR_SCHEMA = 'CLEAR_SCHEMA',
    // 撤销操作
    UNDO = 'UNDO',
    // 恢复操作
    REDO = 'REDO',
    // 设置当前选中的Schema id
    SET_SELECTED_SCHEMA_ID = 'SET_SELECTED_SCHEMA_ID',
    // 设置历史记录预览时选中的Schema id
    SET_HISTORY_SELECTED_SCHEMA_ID = 'SET_HISTORY_SELECTED_SCHEMA_ID',
    // 设置是否处于历史记录预览状态
    SET_HISTORY_PREVIEW = 'SET_HISTORY_PREVIEW',
    // 设置拖动的组件
    SET_DRAGGED_WIDGET = 'SET_DRAGGED_WIDGET',
    // 设置拖动的组件的Schema(画布上的组件)
    SET_DRAGGED_WIDGET_SCHEMA = 'SET_DRAGGED_WIDGET_SCHEMA',
    // 设置拖动的组件的Schema的下标(画布上的组件)
    SET_DRAGOVER_SCHEMA_INDEX = 'SET_DRAGOVER_SCHEMA_INDEX',
    // 添加Schema的操作记录
    PUSH_SCHEMA_OPERATION_RECORD = 'PUSH_SCHEMA_OPERATION_RECORD',
    // 设置表单生成器配置
    SET_FORM_BUILDER_CONFIG = 'SET_FORM_BUILDER_CONFIG',
    // 添加数据源
    ADD_DATASOURCE = 'ADD_DATASOURCE',
    // 修改数据源
    MODIFY_DATASOURCE = 'MODIFY_DATASOURCE',
    // 删除数据源
    DELETE_DATASOURCE = 'DELETE_DATASOURCE',

    // 恢复历史记录中的schemas
    RECOVER_HISTORY_SCHEMAS = 'RECOVER_HISTORY_SCHEMAS',

    // 保存
    SAVE = 'SAVE',

}