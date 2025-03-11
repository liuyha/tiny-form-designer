import {WidgetType} from "./WidgetType.ts";

export interface IWidget {
    // 类型
    type: WidgetType;
    // 组件名称
    name: string;
    // 组件图标
    icon: string;
    // 分组key
    groupKey?: string;
    // 默认属性
    defaultProps?: Record<string, any>;
    // 默认表单项属性
    defaultFormItemProps?: Record<string, any>;
    // 扩展配置
    defaultExtendProps?: {
        // 组件属性
        props?: Record<string, any>,
        // 表单项属性
        formItemProps?: Record<string, any>,
    } & Record<string, any>,
    // 是否隐藏
    hidden?: boolean;
}