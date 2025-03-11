import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";

export type ActionPayload = string

export default (state: IFormBuilderState, screen: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        activeScreen: screen
    }
}