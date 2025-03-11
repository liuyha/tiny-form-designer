import React from "react";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";
import {Collapse, Form} from "antd";
import {ItemType} from "rc-collapse/es/interface";
import {WidgetPropertyFormCollapseItemBuilderMap} from "./Configs";

export type SchemaPropertyPanelProps = {
    children?: React.ReactNode
}



const SchemaPropertyPanel= React.memo(() => {
    const {state} = useFormBuilderContext();
    const schema = state.schemas[0].children?.find(item => item.id === state.selectedSchemaId)


    const items = React.useMemo(() => {
        if (schema) {
            const widgetPropertyFormCollapseConfig = WidgetPropertyFormCollapseItemBuilderMap[schema.type]
            const itemsConfig = widgetPropertyFormCollapseConfig?.()
            return itemsConfig?.collapseItems.map(item => {
                const collapseItem: ItemType = {
                    key: item.key,
                    label: item.label,
                    children: item.formItems.map(formItem => {
                        let innerWrapper
                        if (typeof formItem.render === 'function') {
                            innerWrapper = formItem.render({schema, state})
                        } else {
                            innerWrapper = formItem.render
                        }
                        const style: React.CSSProperties = {}
                        if (formItem.noStyle) {
                            style.padding = '0 10px 10px 10px'
                        }

                        if (!innerWrapper) {
                            style.display = 'none'
                        }

                        return (
                            <div
                                className={'property-form-item'}
                                style={style}
                                key={formItem.name}>
                                <Form.Item
                                    hidden={innerWrapper === undefined}
                                    noStyle={formItem.noStyle}
                                    layout={formItem.layout}
                                    name={formItem.name.split(".")}
                                    label={formItem.label}
                                >
                                    {innerWrapper}
                                </Form.Item>
                            </div>
                        )
                    })
                }
                return collapseItem
            }) || []
        } else {
            return []
        }

    }, [schema])

    return (
        <div className={'schema-property-panel'}>
            <Collapse
                className={'property-setting-from-collapse'}
                size={'small'}
                items={items}
                expandIconPosition={'end'}
                ghost
                defaultActiveKey={items?.map(item => item.key) as string []}
            />
        </div>
    )
})
export default SchemaPropertyPanel