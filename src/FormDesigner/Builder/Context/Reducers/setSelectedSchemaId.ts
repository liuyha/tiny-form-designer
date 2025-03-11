import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";

export type ActionPayload = string | null

export default (state: IFormBuilderState, schemaId: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        selectedSchemaId: schemaId
    }
}