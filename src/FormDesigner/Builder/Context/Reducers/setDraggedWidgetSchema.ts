import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IWidgetSchema} from "../../../_Common/Types/IWidgetSchema.ts";

export type ActionPayload = IWidgetSchema | null

export default (state: IFormBuilderState, schema: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        draggedSchema: schema
    }
}