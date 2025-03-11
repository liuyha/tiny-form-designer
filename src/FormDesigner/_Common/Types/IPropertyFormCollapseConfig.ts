import React from "react";
import {FormItemLayout} from "antd/es/form/Form";
import {IWidgetSchema} from "./IWidgetSchema.ts";
import {IFormBuilderState} from "./IFormBuilderState.ts";

export type FormItemRenderFunctionProps <CP = any>= {
    schema: IWidgetSchema<CP>,
    state: IFormBuilderState
} & Record<string, any>

export type FormItemRenderFunction<CP = any> = (props:FormItemRenderFunctionProps<CP>) => React.ReactNode | undefined

export type PropertyFormItem<CP = any> = {
    name: string,
    label: string,
    layout?: FormItemLayout
    noStyle?: boolean
    render: React.ReactNode | FormItemRenderFunction<CP>
}

export interface IPropertyFormCollapseConfigItem {
    key: string,
    label: string,
    formItems: PropertyFormItem []
}
export interface IPropertyFormCollapseConfig {
    key: string,
    label: string,
    collapseItems: IPropertyFormCollapseConfigItem []
}