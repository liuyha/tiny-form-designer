import React from "react";
import {FormBuilderContext} from "../FormBuilderContext.ts";
import {
    AddDatasourceActionPayload,
    AddSchemaActionPayload,
    DeleteSchemaActionPayload,
    ModifyDatasourceActionPayload,
    ModifySchemaActionPayload,
    RecoverHistorySchemasActionPayload,
    SetActiveDockKeyActionPayload,
    SetActiveScreenActionPayload,
    SetDraggedWidgetActionPayload,
    SetDraggedWidgetSchemaActionPayload,
    SetDraggedWidgetSchemaIndexActionPayload,
    SetPinDockPanelActionPayload,
    SetSchemasActionPayload,
    SetSelectedSchemaIdActionPayload
} from "../Reducers";
import {FormBuilderStateActionEnum} from "../../../_Common/Enums/FormBuilderStateActionEnum.ts";

export const ROOT_SCHEMA_ID = "root";

export const useFormBuilderContext = () => {
    const context = React.useContext(FormBuilderContext);
    if (!context) {
        throw new Error('useFormBuilderContext must be used within a FormBuilderProvider');
    }
    const {state, dispatch} = context

    const actions = {
        setActiveDockKey: (dockKey: SetActiveDockKeyActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_ACTIVE_DOCK_KEY, payload: dockKey})
        },
        setPinDockPanel: (dockKey: SetPinDockPanelActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_PIN_DOCK_PANEL, payload: dockKey})
        },
        setActiveScreen: (screen: SetActiveScreenActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_ACTIVE_SCREEN, payload: screen})
        },
        setSchemas: (schemas: SetSchemasActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_SCHEMAS, payload: schemas})
        },
        clearSchemas: () => {
            context.dispatch({type: FormBuilderStateActionEnum.CLEAR_SCHEMA})
        },
        recoverHistorySchemas: (operation: RecoverHistorySchemasActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.RECOVER_HISTORY_SCHEMAS,  payload: operation})
        },
        setDraggedWidget: (widget: SetDraggedWidgetActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_DRAGGED_WIDGET, payload: widget})
        },
        setDragWidgetSchema: (schema: SetDraggedWidgetSchemaActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_DRAGGED_WIDGET_SCHEMA, payload: schema})
        },
        setDragOverSchemaIndex: (index: SetDraggedWidgetSchemaIndexActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_DRAGOVER_SCHEMA_INDEX, payload: index})
        },
        addSchema: (widget: AddSchemaActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.ADD_SCHEMA, payload: widget})
        },
        setSelectedSchemaId: (schemaId: SetSelectedSchemaIdActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.SET_SELECTED_SCHEMA_ID, payload: schemaId})
        },
        deleteSchema: (schemaId: DeleteSchemaActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.DELETE_SCHEMA, payload: schemaId})
        },
        modifySchema: (schema: ModifySchemaActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.MODIFY_SCHEMA, payload: schema})
        },
        getSelectedSchemaData: () => {
            if (!state.selectedSchemaId) {
                return undefined
            }
            if (ROOT_SCHEMA_ID === state.selectedSchemaId) {
                return state.schemas[0]
            } else {
                return state.schemas[0].children?.find(item => item.id === state.selectedSchemaId)
            }
        },
        addDatasource: (datasource: AddDatasourceActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.ADD_DATASOURCE, payload: datasource})
        },
        modifyDatasource: (datasource: ModifyDatasourceActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.MODIFY_DATASOURCE, payload: datasource})
        },
        deleteDatasource: (datasourceId: DeleteSchemaActionPayload) => {
            context.dispatch({type: FormBuilderStateActionEnum.DELETE_DATASOURCE, payload: datasourceId})
        },
        save: () => {
            context.dispatch({type: FormBuilderStateActionEnum.SAVE})
        }
    }


    return {
        context,
        dispatch,
        state,
        actions
    };
}