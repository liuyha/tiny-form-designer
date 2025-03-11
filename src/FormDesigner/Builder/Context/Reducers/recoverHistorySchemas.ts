import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {pushSchemaOperationRecord} from "./index.ts";
import {SchemaOperationTypeEnum} from "../../../_Common/Enums/SchemaOperationTypeEnum.ts";
import {IOperationHistoryRecord} from "../../../_Common/Types/IOperationHistoryRecord.tsx";

export type ActionPayload = IOperationHistoryRecord['operation']
export default (state: IFormBuilderState, operation: ActionPayload): IFormBuilderState => {
    const newState = {
        ...state,
        schemas: operation.oldSchemas
    }
    return pushSchemaOperationRecord(
        newState,
        {
            type: SchemaOperationTypeEnum.REDO,
            name: `还原`,
            timestamp: Date.now(),
            oldSchemas: [...state.schemas]
        }
    )
}