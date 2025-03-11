import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IWidget} from "../../../_Common/Types/IWidget.ts";

export type ActionPayload = IWidget | null

export default (state: IFormBuilderState, widget: ActionPayload): IFormBuilderState => {
    return {
        ...state,
        draggedWidget: widget
    }
}