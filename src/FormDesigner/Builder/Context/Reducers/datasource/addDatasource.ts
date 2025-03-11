import { IFormBuilderState } from "../../../../_Common/Types/IFormBuilderState.ts";
import {generateUuid} from "../../../../_Common/Utils/Other.ts";
import {DatasourceType} from "../../../../_Common/Types/DatasourceType.ts";

export type ActionPayload = DatasourceType

export default (state: IFormBuilderState, datasource: ActionPayload): IFormBuilderState => {
    const newDatasource = {...datasource} as DatasourceType
    newDatasource.id = generateUuid()
    newDatasource.version = 1
    return {
        ...state,
        datasource: [...state.datasource, newDatasource]
    }
}