import React from "react";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";
import {Tree} from "antd";
import SchemaStructureNode from "./SchemaStructureNode.tsx";
import {IWidgetSchema} from "../../../../../_Common/Types/IWidgetSchema.ts";

export type SchemaStructurePanelProps = {
    // 子元素
    children?: React.ReactNode
}

const SchemaStructurePanel: React.FC<SchemaStructurePanelProps> = () => {

    const {state} = useFormBuilderContext();

    const showLine = (state.schemas[0].children?.length || 0) !== 0


    return (
        <Tree
            defaultSelectedKeys={state.selectedSchemaId ? [state.selectedSchemaId] : []}
            defaultExpandAll
            blockNode
            showLine={showLine}
            fieldNames={{
                key: 'id',
                title: 'name',
                children: 'children'
            }}
            titleRender={(schema) => {
                return (
                    <SchemaStructureNode schema={schema as IWidgetSchema}/>
                )
            }}
            treeData={state.schemas}
        />
    )
}

export default SchemaStructurePanel