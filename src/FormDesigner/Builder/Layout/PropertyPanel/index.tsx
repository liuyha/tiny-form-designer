import React from "react";
import {ConfigProvider, Form, Layout, Tabs, TabsProps} from "antd";
import {useFormBuilderContext} from "../../Context/Hooks/UseFormBuilderContext.ts";
import FormPropertyPanel from "./modules/FormPropertyPanel";
import SchemaPropertyPanel from "./modules/SchemaPropertyPanel";
import { mergeWith, cloneDeep } from 'lodash';

export type PropertyPanelProps = {
    // 子元素
    children?: React.ReactNode
}

const PropertyPanel: React.FC<PropertyPanelProps> = () => {
    const {state, actions} = useFormBuilderContext();
    const selectedSchemaId = state.selectedSchemaId;
    const schemas = state.schemas;
    const rootSchema = schemas[0];
    const schema = selectedSchemaId === rootSchema.id
        ? schemas[0]
        : schemas[0].children?.find(s => s.id === selectedSchemaId);
    const [propertyForm] = Form.useForm();


    const tabItems = React.useMemo(() => {
        const items: TabsProps['items'] = []

        const rootSchema = state.schemas[0]
        const isSelectedRootSchema = state.selectedSchemaId === rootSchema.id
        if (!isSelectedRootSchema) {
            const selectedSchema = rootSchema.children?.find(s => s.id === state.selectedSchemaId);
            if (selectedSchema) {
                items.push(
                    {
                        key: selectedSchema.id,
                        label: '组件配置',
                        children: <SchemaPropertyPanel/>
                    }
                )
            }
        }
        items.push(
            {
                key: rootSchema.id,
                label: '表单配置',
                children: <FormPropertyPanel/>
            }
        )

        return items
    }, [state.schemas, state.selectedSchemaId])


    React.useEffect(() => {
        propertyForm?.resetFields();
        if (schema) {

            propertyForm?.setFieldsValue(schema);
        }
    }, [selectedSchemaId]);


    const handleValuesChange = (changedValues: any) => {
        const newSchema = mergeWith({},cloneDeep(schema), changedValues, (objValue, srcValue) => {
            if (Array.isArray(objValue)) {
                return srcValue
            }
        })
        if (newSchema) {
            actions.modifySchema(newSchema)
        }

    };

    const [activeTabKey, setActiveTabKey] = React.useState(!schema ? rootSchema.id : schema.id)

    React.useEffect(() => {
        setActiveTabKey(!schema ? rootSchema.id : schema.id)
    }, [rootSchema.id, schema, state.selectedSchemaId])

    return (
        <Layout.Sider
            width={500}
            className={'property-panel-container'}
        >
            <ConfigProvider componentSize={'middle'}>
                <Form
                    className={'property-panel-form'}
                    layout="horizontal"
                    labelAlign="left"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 18}}
                    preserve={false}
                    form={propertyForm}
                    onValuesChange={handleValuesChange}
                >
                    <Tabs
                        className={'property-panel-tabs'}
                        items={tabItems}
                        activeKey={activeTabKey}
                        onChange={setActiveTabKey}
                    />
                </Form>
            </ConfigProvider>
        </Layout.Sider>
    )
}

export default PropertyPanel