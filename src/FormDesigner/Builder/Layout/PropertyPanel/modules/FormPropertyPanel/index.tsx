import {Form, InputNumber, Radio} from "antd";
import React from "react";

export type FormPropertyPanelProps = {
    // 子元素
    children?: React.ReactNode
}

const FormPropertyPanel: React.FC<FormPropertyPanelProps> = () => {
    return (
        <div className={'form-property-panel'}>

            <div className={'property-form-item'}>
                <Form.Item label="表单布局" name={['props','layout']}>
                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '水平', value: 'horizontal' },
                            { label: '垂直', value: 'vertical' },
                            { label: '内联', value: 'inline' },
                        ]}
                    />
                </Form.Item>
            </div>

            <div className={'property-form-item'}>
                <Form.Item label="标签对齐" name={['props', 'labelAlign']}>
                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '左对齐', value: 'left' },
                            { label: '右对齐', value: 'right' },
                        ]}
                    />
                </Form.Item>
            </div>
            <div className={'property-form-item'}>
                <Form.Item label="标签换行" name={['props', 'labelWrap']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '换行', value: true },
                            { label: '不换行', value: false },
                        ]}
                    />
                </Form.Item>
            </div>
            <div className={'property-form-item'}>
                <Form.Item label="标签宽度" name={['props', 'labelCol', 'span']}>
                    <InputNumber min={0} max={24} />
                </Form.Item>
            </div>
            <div className={'property-form-item'}>
                <Form.Item label="控件宽度" name={['props', 'wrapperCol', 'span']}>
                    <InputNumber  min={0} max={24} />
                </Form.Item>
            </div>

        </div>
    )
}

export default FormPropertyPanel