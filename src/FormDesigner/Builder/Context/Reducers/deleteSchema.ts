import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {pushSchemaOperationRecord} from "./index.ts";
import {SchemaOperationTypeEnum} from "../../../_Common/Enums/SchemaOperationTypeEnum.ts";

export type ActionPayload = string

export default (state: IFormBuilderState, schemaId: ActionPayload): IFormBuilderState => {
    if (schemaId === 'root') return state;
    const schema = state.schemas[0].children?.find(s => s.id === schemaId);
    if (!schema) {
        return state;
    }
    const newState = {
        ...state,
        schemas: [{
            ...state.schemas[0],
            children: state.schemas[0].children?.filter(s => s.id !== schemaId) || []
        }]
    };
    return pushSchemaOperationRecord(
        newState,
        {
            type: SchemaOperationTypeEnum.DELETE,
            name: `刪除${schema.name}`,
            timestamp: Date.now(),
            schema: {...schema},
            oldSchemas: [...state.schemas]
        }
    )
}