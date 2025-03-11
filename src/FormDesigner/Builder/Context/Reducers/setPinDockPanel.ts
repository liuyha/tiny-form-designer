import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";

export type ActionPayload = boolean

export default (state: IFormBuilderState, schemas: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        pinDockPanel: schemas
    }
}