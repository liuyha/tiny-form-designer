import {IFormBuilderState} from "../../../../_Common/Types/IFormBuilderState";

export type ActionPayload = string

export default (state: IFormBuilderState, datasourceId: ActionPayload): IFormBuilderState => {
    const datasource = state.datasource?.find(s => s.id === datasourceId);
    if (!datasource) {
        return state;
    }
    return {
        ...state,
        datasource: state.datasource.filter(item => item.id !== datasourceId)
    }
}