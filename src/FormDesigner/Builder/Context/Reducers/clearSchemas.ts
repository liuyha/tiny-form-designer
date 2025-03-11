import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {rootWidget} from "../FormBuilderProvider.tsx";
import {IWidgetSchema} from "../../../_Common/Types/IWidgetSchema.ts";
import {pushSchemaOperationRecord} from "./index.ts";
import {SchemaOperationTypeEnum} from "../../../_Common/Enums/SchemaOperationTypeEnum.ts";


export default (state: IFormBuilderState): IFormBuilderState => {
    const newState = {
        ...state,
        schemas: [{...rootWidget}] as IWidgetSchema []
    }
    return pushSchemaOperationRecord(
        newState,
        {
            type: SchemaOperationTypeEnum.CLEAR,
            name: `清空`,
            timestamp: Date.now(),
            oldSchemas: [...state.schemas]
        }
    )
}