import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";

export type ActionPayload = number | null

export default (state: IFormBuilderState, index: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        dragOverSchemaIndex: index
    }
}