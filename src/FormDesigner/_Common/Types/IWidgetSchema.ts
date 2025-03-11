
import {IWidget} from "./IWidget.ts";

export type WidgetProps = Record<string, any>
/**
 * 组件schema
 */
export interface IWidgetSchema<ComP = WidgetProps> extends IWidget{
    // 组件id
    id: string,
    // 组件属性
    props?: ComP,
    // 表单项属性
    formItemProps?: Record<string, any>,
    // 扩展配置
    extendProps?: {
        // 组件属性
        props?: Record<string, any>,
        // 表单项属性
        formItemProps?: Record<string, any>,
        // 块级空间
        blockWrapper?: boolean
    } & Record<string, any>,
    // 子节点
    children?: IWidgetSchema<any>[],
}