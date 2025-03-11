import React from "react";
import {IFormBuilderState} from "../../_Common/Types/IFormBuilderState.ts";
import {ScreenTypeEnum} from "../../_Common/Enums/ScreenTypeEnum.ts";
import {FormBuilderActionType} from "../../_Common/Types/FormBuilderActionType.ts";
import {FormBuilderContext} from "./FormBuilderContext.ts";
import {
    addDatasource,
    addSchema, deleteDatasource,
    deleteSchema, modifyDatasource,
    modifySchema,
    pushSchemaOperationRecord, recoverHistorySchemas,
    setActiveDockKey,
    setActiveScreen,
    setDraggedWidget,
    setDraggedWidgetSchema,
    setDraggedWidgetSchemaIndex,
    setFormBuilderConfig,
    setPinDockPanel,
    setSchemas,
    setSelectedSchemaId
} from "./Reducers";
import {FormBuilderStateActionEnum} from "../../_Common/Enums/FormBuilderStateActionEnum.ts";
import {WidgetTypeEnum} from "../../_Common/Enums/WidgetTypeEnum.ts";
import {IWidget} from "../../_Common/Types/IWidget.ts";
import {ROOT_SCHEMA_ID} from "./Hooks/UseFormBuilderContext.ts";
import {DEFAULT_FORM_BUILDER_CONFIG} from "./Hooks/UseFormBuilderConfig.ts";
import {DEFAULT_WIDGET_CONFIG} from "../Config/DefaultWidgetConfig.ts";
import clearSchemas from "./Reducers/clearSchemas.ts";


export const rootWidget = {
    ...(DEFAULT_WIDGET_CONFIG.find(item => item.type === WidgetTypeEnum.ROOT) || {
        type: ROOT_SCHEMA_ID,
        defaultProps: {},

    } as unknown as IWidget),
    id: ROOT_SCHEMA_ID,
    extendProps: {
        props: undefined,
        formItemProps: undefined
    },
    props: {
        "layout": "horizontal",
        "labelAlign": "left",
        "labelWrap": true,
        "labelCol": {
            "span": 4
        },
        "wrapperCol": {
            "span": 20
        }
    },
    children: [],
};
/**
 * 初始状态
 */
const initialState: IFormBuilderState = {
    schemas: [
        {
            ...rootWidget
        }
    ],
    selectedSchemaId: ROOT_SCHEMA_ID,
    historySelectedSchemaId: null,
    isHistoryPreview: false,
    schemaHistory: {
        past: [],
        future: []
    },
    activeDockKey: null,
    pinDockPanel: false,
    activeScreen: ScreenTypeEnum.SCREEN_PC,
    draggedWidget: null,
    draggedSchema: null,
    dragOverSchemaIndex: null,
    formBuilderConfig: {...DEFAULT_FORM_BUILDER_CONFIG},
    datasource: []
}


const formBuilderReducer = (state: IFormBuilderState, action: FormBuilderActionType): IFormBuilderState => {
    const {type} = action
    let eventData = action.payload

    let newState = {...state}
    switch (type) {
        case FormBuilderStateActionEnum.SET_ACTIVE_DOCK_KEY:
            newState = setActiveDockKey(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_PIN_DOCK_PANEL:
            newState = setPinDockPanel(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_ACTIVE_SCREEN:
            newState = setActiveScreen(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_SCHEMAS:
            newState = setSchemas(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_DRAGGED_WIDGET:
            newState = setDraggedWidget(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_DRAGGED_WIDGET_SCHEMA:
            newState = setDraggedWidgetSchema(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_DRAGOVER_SCHEMA_INDEX:
            newState = setDraggedWidgetSchemaIndex(state, action.payload)
            break
        case FormBuilderStateActionEnum.PUSH_SCHEMA_OPERATION_RECORD:
            newState = pushSchemaOperationRecord(state, action.payload)
            break
        case FormBuilderStateActionEnum.ADD_SCHEMA:
            newState = addSchema(state, action.payload)
            break
        case FormBuilderStateActionEnum.CLEAR_SCHEMA:
            newState = clearSchemas(state)
            break
        case FormBuilderStateActionEnum.RECOVER_HISTORY_SCHEMAS:
            newState = recoverHistorySchemas(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_SELECTED_SCHEMA_ID:
            newState = setSelectedSchemaId(state, action.payload)
            break
        case FormBuilderStateActionEnum.DELETE_SCHEMA:
            newState = deleteSchema(state, action.payload)
            break
        case FormBuilderStateActionEnum.MODIFY_SCHEMA:
            newState = modifySchema(state, action.payload)
            break
        case FormBuilderStateActionEnum.SET_FORM_BUILDER_CONFIG:
            newState = setFormBuilderConfig(state, action.payload)
            break
        case FormBuilderStateActionEnum.ADD_DATASOURCE:
            newState = addDatasource(state, action.payload)
            break
        case FormBuilderStateActionEnum.MODIFY_DATASOURCE:
            newState = modifyDatasource(state, action.payload)
            break
        case FormBuilderStateActionEnum.DELETE_DATASOURCE:
            newState = deleteDatasource(state, action.payload)
            break
        case FormBuilderStateActionEnum.SAVE:
            eventData = newState.schemas
            break
    }
    const eventListener = state.formBuilderConfig.eventListener
    if (eventListener) {
        if (typeof eventListener === 'function') {
            eventListener(type, eventData)
        } else {
            eventListener[type]?.(type, eventData)
        }
    }
    return newState
}

export const FormBuilderProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, dispatch] = React.useReducer(formBuilderReducer, initialState);

    return (
        <FormBuilderContext.Provider value={{state, dispatch}}>
            {children}
        </FormBuilderContext.Provider>
    );
};
