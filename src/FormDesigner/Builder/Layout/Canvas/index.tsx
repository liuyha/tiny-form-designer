import React from "react";
import {Empty, Form, Layout} from "antd";
import {useFormBuilderContext} from "../../Context/Hooks/UseFormBuilderContext.ts";
import SchemaRender from "../../../Widgets/SchemaRender.tsx";
import SchemaElementHoverBox from "../../Components/SchemaElementHoverBox.tsx";
import SchemaElementSelectedBox from "../../Components/SchemaElementSelectedBox.tsx";
import classnames from "classnames";

export type BuilderCanvasProps = {
    // 子元素
    children?: React.ReactNode
}

const BuilderCanvas: React.FC<BuilderCanvasProps> = () => {
    const {actions, state} = useFormBuilderContext();
    const [highlight, setHighlight] = React.useState(false)
    const [sortToSchemaAfter, setSortToSchemaAfter] = React.useState(false)
    const rootSchema = state.schemas[0];

    const handleCanvasDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        actions.setActiveDockKey(null)

        const draggedWidget = state.draggedWidget;
        if (draggedWidget && state.schemas[0]?.children?.length === 0) {
            setHighlight(true)
        } else {
            setHighlight(false)
        }
    }


    const handleSchemaDragOver = (e: React.DragEvent, index: number, rect: DOMRect) => {
        e.preventDefault();
        e.stopPropagation();
        const mouseY = e.clientY;
        const elementMiddle = rect.top + rect.height / 2;
        const isAfter = mouseY > elementMiddle
        setSortToSchemaAfter(isAfter)
        actions.setDragOverSchemaIndex(index)
    }


    const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const draggedWidget = state.draggedWidget;
        const draggedSchema = state.draggedSchema;
        const dragOverSchemaIndex = state.dragOverSchemaIndex;
        if (draggedWidget) {
            actions.addSchema({
                ...draggedWidget
            })
        } else if (draggedSchema && dragOverSchemaIndex !== null) {
            const oldIndex = state.schemas[0].children?.findIndex(s => s.id === draggedSchema.id) ?? -1;
            const newIndex = sortToSchemaAfter ? dragOverSchemaIndex + 1 : dragOverSchemaIndex
            if (oldIndex !== -1 && newIndex !== oldIndex) {
                const newChildren = Array.from(state.schemas[0].children || []);
                const [removed] = newChildren.splice(oldIndex, 1);
                newChildren.splice(newIndex, 0, removed);
                actions.setSchemas([{
                    ...state.schemas[0],
                    children: newChildren
                }]);
            }
        }
        actions.setDraggedWidget(null)
        actions.setDragWidgetSchema(null)
        actions.setDragOverSchemaIndex(null)
        setHighlight(false)
    }

    const handleClick = () => {
        actions.setSelectedSchemaId(state.schemas[0].id)
    }

    const classNames = classnames(
        'canvas',
        {
            "highlight": highlight
        }
    )

    const rootSchemaChildren = rootSchema.children || []

    return (

        <Layout.Content className={'builder-canvas-container'}>
            <div
                className={classNames}
                onDragOver={handleCanvasDragOver}
                onDrop={handleDragDrop}
                onClick={handleClick}
            >
                <SchemaElementHoverBox/>
                <SchemaElementSelectedBox/>
                <Form
                    {...rootSchema.defaultProps}
                    {...rootSchema.props}
                    style={{
                        padding: 24,
                        height: '100%',
                        overflowY: 'auto'
                    }}
                >
                    {
                        rootSchemaChildren.map((schema, index) => {
                            return (
                                <React.Fragment key={schema.id}>
                                    <SchemaRender
                                        index={index}
                                        highlightTop={ index === state.dragOverSchemaIndex && !sortToSchemaAfter }
                                        highlightBottom={ index === state.dragOverSchemaIndex && sortToSchemaAfter }
                                        schema={schema}
                                        onDragStart={() => {}}
                                        onDragOver={(e, rect) => handleSchemaDragOver(e, index, rect)}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                    {
                        rootSchemaChildren.length === 0 && <Empty description={'拖拽组件到此处'}></Empty>
                    }
                </Form>

            </div>
        </Layout.Content>
    )
}

export default BuilderCanvas