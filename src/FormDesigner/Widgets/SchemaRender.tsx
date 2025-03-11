import React from "react";
import {IWidgetSchema} from "../_Common/Types/IWidgetSchema.ts";
import {useFormBuilderContext} from "../Builder/Context/Hooks/UseFormBuilderContext.ts";
import {WidgetTypeEnum} from "../_Common/Enums/WidgetTypeEnum.ts";
import classnames from "classnames";
import {Form} from "antd";
import {useFormBuilderConfig} from "../Builder/Context/Hooks/UseFormBuilderConfig.ts";

export type SchemaRenderProps = {
    schema: IWidgetSchema
    index: number,
    onDragStart: (e: React.DragEvent, schema: IWidgetSchema) => void;
    onDragOver: (e: React.DragEvent, rect: DOMRect) => void;
    highlightTop?: boolean;
    highlightBottom?: boolean;
}


const SchemaRenderFormItem = (props: { schema: IWidgetSchema, children?: React.ReactNode }) => {
    const extendProps = props.schema.extendProps
    const formItemProps = props.schema.formItemProps

    const classNames = classnames(
        formItemProps?.rootClassName,
        {
            'block-wrapper': extendProps?.blockWrapper
        }
    )

    return (
        <Form.Item {...formItemProps} rootClassName={classNames}>
            {props.children}
        </Form.Item>
    )
}

const SchemaRender: React.FC<SchemaRenderProps> = (props) => {
    const {schema, highlightTop, highlightBottom} = props
    const elementRef = React.useRef<HTMLDivElement>(null);
    const {state, actions} = useFormBuilderContext();
    const formBuilderConfig = useFormBuilderConfig();
    const {widgetElementRender} = formBuilderConfig

    const handleDragStart = (event: React.DragEvent) => {
        actions.setDragWidgetSchema(schema)
        props.onDragStart(event, schema)
    }

    const handleDragOver = (e: React.DragEvent) => {
        if (elementRef.current) {
            props.onDragOver(e, elementRef.current.getBoundingClientRect());
        }
    }

    const handleClick = (e: React.MouseEvent<any, any>) => {
        e.stopPropagation()
        actions.setSelectedSchemaId(schema.id)
    }
    const classNames = classnames(
        'schema-renderer',
        {
            'selected': schema.id === state.selectedSchemaId
        },
        {
            'highlight-top': highlightTop
        },
        {
            'highlight-bottom': highlightBottom
        },
    )

    const WidgetRender = widgetElementRender[schema.type as keyof typeof widgetElementRender];
    if (!WidgetRender) return null;
    if (WidgetTypeEnum.ROOT === schema.type) {
        return (<WidgetRender schema={schema}/>);
    }
    return (
        <div
            ref={elementRef}
            className={classNames}
            data-widget-type={schema.type}
            data-schema-id={schema.id}
            draggable
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onClick={handleClick}
        >
            <SchemaRenderFormItem schema={schema}>
                <WidgetRender schema={schema}/>
            </SchemaRenderFormItem>
        </div>
    )
}

export default SchemaRender