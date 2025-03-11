import {FormBuilderContextHookType} from "./FormBuilderContextHookType.ts";
import {IFormBuilderState} from "./IFormBuilderState.ts";
import type * as React from "react";
import type {ButtonColorType} from "antd/es/button/buttonHelpers";


export type BaseBarItemType = {
    // 键
    key: string,
    // 按钮类型
    buttonType?: 'default' | 'text' | 'icon'
    // 名称
    label: string,
    // 图标
    icon?: string,

    // 是否分割
    split?: boolean

    color?: ButtonColorType

    /**
     * 是否禁用
     * @param state 数据状态
     */
    isDisabled?: (state: IFormBuilderState) => boolean

    /**
     * 是否激活
     * @param state 数据状态
     */
    isActive?: (state: IFormBuilderState) => boolean

    /**
     *
     * @param state 数据状态
     * @param contextHook 上下文钩子
     */
    onClick?: (event: React.MouseEvent<any>, contextHook: FormBuilderContextHookType) => void
}


export type BaseBarGroupType = {
    label: string,
    // 按钮类型
    buttonType?: BaseBarItemType['buttonType']

    // 分割类型
    splitType?: 'border' | 'divider'

    bars?: BaseBarItemType []
}


export type BaseBarConfigType = BaseBarGroupType []