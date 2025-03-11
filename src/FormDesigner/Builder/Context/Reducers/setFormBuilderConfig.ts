import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IFormBuilderCustomConfig} from "../../../_Common/Types/IFormBuilderCustomConfig.ts";
import {IFormBuilderConfig} from "../../../_Common/Types/IFormBuilderConfig.ts";
import {DEFAULT_FORM_BUILDER_CONFIG} from "../Hooks/UseFormBuilderConfig.ts";
import {union} from "lodash";

export type ActionPayload = IFormBuilderCustomConfig

export default (state: IFormBuilderState, config?: ActionPayload): IFormBuilderState => {

    const defaultConfig = {...DEFAULT_FORM_BUILDER_CONFIG} as IFormBuilderConfig
    if (!config) {
        return state
    }
    if (config.dockBars) {
        defaultConfig.dockBars = config.dockBars
    }
    if (config.toolBars) {
        defaultConfig.toolBars = config.toolBars
    }
    if (config.widgets) {
        defaultConfig.widgets = config.widgets
    }
    if (config.widgetGroups) {
        defaultConfig.widgetGroups = config.widgetGroups
    }
    if (config.widgetElementRender) {
        defaultConfig.widgetElementRender = config.widgetElementRender
    }
    if (config.eventListener) {
        defaultConfig.eventListener = config.eventListener
    }
    const newState = {
        ...state,
        formBuilderConfig: defaultConfig
    }
    if (config.datasource) {
        newState.datasource = union(state.datasource, config.datasource)
    }

    return newState
}