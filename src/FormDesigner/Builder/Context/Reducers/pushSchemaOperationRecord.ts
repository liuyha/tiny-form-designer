import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IOperationHistoryRecord} from "../../../_Common/Types/IOperationHistoryRecord.tsx";

export type ActionPayload = IOperationHistoryRecord['operation']

/** 历史记录最大长度 */
const MAX_HISTORY_LENGTH = 100;

export default (state: IFormBuilderState, operation: ActionPayload ): IFormBuilderState => {
    const newPast = [...state.schemaHistory.past, {
        schemas: [...state.schemas],
        operation
    }];

    if (newPast.length > MAX_HISTORY_LENGTH) {
        newPast.shift();
    }

    return {
        ...state,
        schemaHistory: {
            past: newPast,
            future: []
        }
    };
}