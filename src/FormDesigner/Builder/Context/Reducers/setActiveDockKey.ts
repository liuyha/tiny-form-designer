import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";

export type ActionPayload = string | null

export default (state: IFormBuilderState, dockKey: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        activeDockKey: dockKey
    }
}