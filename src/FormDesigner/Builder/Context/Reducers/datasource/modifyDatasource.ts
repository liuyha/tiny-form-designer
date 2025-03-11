import { IFormBuilderState } from "../../../../_Common/Types/IFormBuilderState.ts";
import {DatasourceType} from "../../../../_Common/Types/DatasourceType.ts";

export type ActionPayload = DatasourceType

export default (state: IFormBuilderState, datasource: ActionPayload): IFormBuilderState => {
    const newDatasource = {...datasource} as DatasourceType
    return {
        ...state,
        datasource: state.datasource.map(item => {
            if (item.id === newDatasource.id) {
                newDatasource.version = item.version + 1
                return newDatasource
            } else {
                return item
            }
        })
    }
}