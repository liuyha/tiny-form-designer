
import {IFormBuilderConfig} from "./IFormBuilderConfig.ts";
import {DatasourceListType} from "./DatasourceType.ts";

export interface IFormBuilderCustomConfig {
    // Dock栏菜单
    dockBars?: IFormBuilderConfig['dockBars']

    // 工具栏菜单
    toolBars?: IFormBuilderConfig['toolBars']

    // 表单控件
    widgets?: IFormBuilderConfig ['widgets'],

    // 控件分组
    widgetGroups?: IFormBuilderConfig ['widgetGroups'],

    // 控件节点的渲染
    widgetElementRender?: IFormBuilderConfig['widgetElementRender']

    /**
     * 事件监听器
     * @param eventKey 事件key
     * @param data 数据
     */
    eventListener?: IFormBuilderConfig['eventListener']

    /**
     * 数据源
     */
    datasource?: DatasourceListType
}