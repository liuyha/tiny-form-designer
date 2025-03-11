import React from "react";
import {IWidgetSchema} from "../../../../../_Common/Types/IWidgetSchema.ts";
import Icon from "../../../../../_Common/Components/Icon";
import IconButton from "../../../../../_Common/Components/IconButton";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";
import {WidgetTypeEnum} from "../../../../../_Common/Enums/WidgetTypeEnum.ts";

export type SchemaStructureNodeProps = {
    schema: IWidgetSchema
}

const SchemaStructureNode: React.FC<SchemaStructureNodeProps> = (props) => {
    const {schema} = props
    const { actions } = useFormBuilderContext();

    const handleDelete = () => {
        actions.setSelectedSchemaId(null)
        actions.deleteSchema(schema.id)
    }

    return (
        <div className={'schema-structure-tree-node'}>
            <div className={'left'}>
                <Icon name={schema.icon}></Icon>
                <span style={{
                    paddingLeft: 5
                }}>{schema.name}</span>
            </div>
            <div className={'right'}>
                {
                    schema.type !== WidgetTypeEnum.ROOT && <>
                        <IconButton
                            variant={'text'}
                            color={'danger'}
                            border={false}
                            icon={'delete'}
                            onClick={handleDelete}
                        ></IconButton>
                    </>
                }
            </div>
        </div>
    )
}

export default SchemaStructureNode