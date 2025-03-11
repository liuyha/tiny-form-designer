import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IWidgetSchema} from "../../../_Common/Types/IWidgetSchema.ts";

export type ActionPayload = IWidgetSchema []

export default (state: IFormBuilderState, schemas: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        schemas: schemas
    }
}