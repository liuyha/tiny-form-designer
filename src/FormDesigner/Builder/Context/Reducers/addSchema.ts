import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IWidget} from "../../../_Common/Types/IWidget.ts";
import {IWidgetSchema} from "../../../_Common/Types/IWidgetSchema.ts";
import {pushSchemaOperationRecord} from "./index.ts";
import {SchemaOperationTypeEnum} from "../../../_Common/Enums/SchemaOperationTypeEnum.ts";
import {generateRandomString, generateUuid} from "../../../_Common/Utils/Other.ts";

export type ActionPayload = IWidget

export default (state: IFormBuilderState, widget: ActionPayload): IFormBuilderState => {
    const newSchema: IWidgetSchema = {...widget} as IWidgetSchema
    newSchema.props = {
        ...widget.defaultProps
    }
    newSchema.formItemProps = {
        ...widget.defaultFormItemProps
    }
    newSchema.extendProps = {
        ...widget.defaultExtendProps
    }
    const fieldName = `${newSchema.type}_${generateRandomString()}`;
    newSchema.id = generateUuid()
    newSchema.formItemProps.name = fieldName


    const newState = {
        ...state,
        schemas: [{
            ...state.schemas[0],
            children: [...(state.schemas[0].children || []), newSchema]
        }]
    };

    return pushSchemaOperationRecord(
        newState,
        {
            type: SchemaOperationTypeEnum.ADD,
            name: `添加${widget.name}`,
            timestamp: Date.now(),
            schema: {...newSchema},
            oldSchemas: [...state.schemas]
        }
    )

}