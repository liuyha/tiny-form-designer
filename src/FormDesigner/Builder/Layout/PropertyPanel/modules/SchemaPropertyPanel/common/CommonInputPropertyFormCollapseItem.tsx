import {CollapseProps, Form, Input, InputNumber, Radio} from "antd";

export const CommonInputPropertyFormCollapseItem: CollapseProps['items'] = [
    {
        key: 'basic',
        label: '基础配置',
        children: (
            <>

                <Form.Item  label="字段名" name={['formItemProps.name']}>
                    <Input placeholder={'请输入字段名'} />
                </Form.Item>
                <Form.Item label="字段标题" name={['formItemProps.label']}>
                    <Input placeholder={'请输入字段名'} />
                </Form.Item>
                <Form.Item label="提示文案" name={['props.placeholder']}>
                    <Input placeholder={'请输入字段名'} />
                </Form.Item>
                <Form.Item label="默认值" name={['formItemProps.initialValue']}>
                    <Input placeholder={'请输入默认值'} />
                </Form.Item>
                <Form.Item label="是否必填" name={['formItemProps.required']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '必填', value: true },
                            { label: '非必填', value: false },
                        ]}
                    />
                </Form.Item>
                <Form.Item  label="未填提示" name={['extendProps.formItemProps.required.message']}>
                    <Input placeholder={`默认："请输入+字段标题"`} />
                </Form.Item>
            </>
        ),
    },
    {
        key: 'formItem',
        label: '表单项配置',
        children: (
            <>


                <Form.Item label="布局方式" name={['formItemProps.layout']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '水平', value: 'horizontal' },
                            { label: '垂直', value: 'vertical' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="标签对齐方式" name={['formItemProps.labelAlign']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '左对齐', value: 'left' },
                            { label: '右对齐', value: 'right' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="标签宽度" name={['formItemProps.labelCol.span']}>
                    <InputNumber min={0} max={24} />
                </Form.Item>
                <Form.Item label="控件宽度" name={['formItemProps.wrapperCol.span']}>
                    <InputNumber  min={0} max={24} />
                </Form.Item>
                <Form.Item label="提示信息" name={['formItemProps.tooltip']}>
                    <Input placeholder={'请输入提示信息'} />
                </Form.Item>
                <Form.Item label="帮助信息" name={['formItemProps.help']}>
                    <Input placeholder={'请输入帮助信息'} />
                </Form.Item>
                <Form.Item label="扩展信息" name={['formItemProps.extra']}>
                    <Input placeholder={'请输入扩展信息'} />
                </Form.Item>

            </>
        ),
    },
    {
        key: 'other',
        label: '其他配置',
        children: (
            <>


                <Form.Item label="是否只读" name={['props.readOnly']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '是', value: true },
                            { label: '否', value: false },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="是否禁用" name={['props.disabled']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '是', value: true },
                            { label: '否', value: false },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="支持清除" name={['extendProps.props.allowClear']}>

                    <Radio.Group
                        optionType="button"
                        options={[
                            { label: '是', value: true },
                            { label: '否', value: false },
                        ]}
                    />
                </Form.Item>
            </>
        ),
    }
];