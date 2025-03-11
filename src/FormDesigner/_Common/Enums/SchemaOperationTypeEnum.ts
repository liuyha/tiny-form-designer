/**
 * 操作类型枚举
 */
export enum SchemaOperationTypeEnum {
    // 添加
    ADD = 'add',
    // 删除
    DELETE = 'delete',
    // 修改
    MODIFY = 'modify',
    // 移动
    MOVE = 'move',
    // 复制
    COPY = 'copy',
    // 清空
    CLEAR = 'clear',
    // 撤销
    UNDO = 'undo',
    // 恢复
    REDO = 'redo',


}