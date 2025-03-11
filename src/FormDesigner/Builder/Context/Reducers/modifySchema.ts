import {IFormBuilderState} from "../../../_Common/Types/IFormBuilderState.ts";
import {IWidgetSchema} from "../../../_Common/Types/IWidgetSchema.ts";
import {pushSchemaOperationRecord} from "./index.ts";
import {SchemaOperationTypeEnum} from "../../../_Common/Enums/SchemaOperationTypeEnum.ts";

export type ActionPayload = IWidgetSchema

export default (state: IFormBuilderState, schema: ActionPayload): IFormBuilderState => {
    const rootSchema = state.schemas[0]
    const isRootSchema = rootSchema.id === schema.id
    let newSchemas;
    let oldSchemaData;
    if (isRootSchema) {
        newSchemas = [schema]
        oldSchemaData = {...rootSchema}
    } else {
        oldSchemaData = rootSchema.children?.find(s => s.id === schema.id)
        newSchemas = [{
            ...state.schemas[0],
            children: state.schemas[0].children?.map(s =>
                s.id === schema.id ? schema : s
            ) || []
        }];
    }
    const newState = {
        ...state,
        schemas: newSchemas
    };

    return pushSchemaOperationRecord(
        newState,
        {
            type: SchemaOperationTypeEnum.ADD,
            name: `修改${schema.name}`,
            timestamp: Date.now(),
            schema: oldSchemaData,
            oldSchemas: [...state.schemas]
        }
    )
}