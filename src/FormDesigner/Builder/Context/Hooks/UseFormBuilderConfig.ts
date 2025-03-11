import React from "react";
import {FormBuilderContext} from "../FormBuilderContext.ts";
import {IFormBuilderCustomConfig} from "../../../_Common/Types/IFormBuilderCustomConfig.ts";
import {IFormBuilderConfig} from "../../../_Common/Types/IFormBuilderConfig.ts";
import {DEFAULT_DOCK_BAR_CONFIG} from "../../Config/DefaultDockBarConfig.ts";
import {DEFAULT_RIGHT_TOOLBAR_CONFIG, DEFAULT_TOOLBAR_CONFIG} from "../../Config/DefaultToolbarConfig.ts";
import {DEFAULT_WIDGET_CONFIG} from "../../Config/DefaultWidgetConfig.ts";
import {DEFAULT_WIDGET_GROUP_CONFIG} from "../../Config/DefaultWidgetGroupConfig.ts";
import {WIDGET_ELEMENT_CONFIG} from "../../../Widgets";
import {FormBuilderStateActionEnum} from "../../../_Common/Enums/FormBuilderStateActionEnum.ts";

export const DEFAULT_FORM_BUILDER_CONFIG: IFormBuilderConfig = {
    dockBars: DEFAULT_DOCK_BAR_CONFIG,

    toolBars: {
        left: DEFAULT_TOOLBAR_CONFIG,
        right: DEFAULT_RIGHT_TOOLBAR_CONFIG
    },

    widgets: DEFAULT_WIDGET_CONFIG,

    widgetGroups: DEFAULT_WIDGET_GROUP_CONFIG,

    widgetElementRender: WIDGET_ELEMENT_CONFIG
}
export const useFormBuilderConfig = () => {

    const context = React.useContext(FormBuilderContext);
    if (!context) {
        throw new Error('useFormBuilderContext must be used within a FormBuilderProvider');
    }
    const {state, dispatch} = context


    /**
     * 合并自定义配置
     * @param config 自定义配置
     */
    const mergeCustomConfig = (config?: IFormBuilderCustomConfig) => {

        dispatch({type: FormBuilderStateActionEnum.SET_FORM_BUILDER_CONFIG, payload: config})
    }


    return {
        ...state.formBuilderConfig,
        setConfig: mergeCustomConfig
    }
}