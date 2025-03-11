import {IWidget} from "./IWidget.ts";
import {IWidgetGroup} from "./IWidgetGroup.ts";
import React from "react";
import {BaseBarConfigType} from "./BaseBarItemType.ts";
import {BaseFormBuilderEvent} from "./FormBuilderEventType.ts";



export interface IFormBuilderConfig {
    // Dock栏菜单
    dockBars: BaseBarConfigType

    // 工具栏菜单
    toolBars: {
        left?: BaseBarConfigType,
        right?: BaseBarConfigType
    }

    // 表单控件
    widgets: IWidget [],

    // 控件分组
    widgetGroups: IWidgetGroup [],

    // 控件节点的渲染
    widgetElementRender: Record<string, React.FC<any>>

    /**
     * 事件监听器
     * @param eventKey 事件key
     * @param data 数据
     */
    eventListener?: Record<string, BaseFormBuilderEvent> | BaseFormBuilderEvent
}