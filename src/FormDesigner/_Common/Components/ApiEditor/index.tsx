import React, { useState } from 'react';
import { Select, Input, Space, Tabs, Radio, Row, Col } from 'antd';
import { IApi } from '../../Types/ApiType';
import InputList, { InputColumn } from '../InputList';
import {merge} from 'lodash';

const { TextArea } = Input;
const { Option } = Select;

const paramColumns: InputColumn[] = [
    { key: 'key', title: '参数名', placeholder: '请输入参数名' },
    { key: 'value', title: '参数值', placeholder: '请输入参数值' },
    { key: 'description', title: '参数描述', placeholder: '请输入参数描述' },
];

export type ApiEditorProps = {
    value?: IApi;
    onChange?: (value: IApi) => void;
};

const defaultValue = {
    protocol: 'HTTP',
    method: 'GET',
    headers: [],
    queryParams: [],
    formParams: [],
    cookies: [],
    paramType: 'FORM',
    bodyContent: '',
} as unknown as IApi;

const ApiEditor: React.FC<ApiEditorProps> = (props) => {
    const {value = {...defaultValue}} = props;
    const [activeParamTab, setActiveParamTab] = useState('header');
    const [localValue, setLocalValue] = useState<IApi>(props.value || { ...defaultValue });

    // 更新 localValue 并触发 onChange
    const handleValueChange = (changeValues: Partial<IApi>) => {
        const newValue: IApi = merge({}, value, changeValues);
        setLocalValue(newValue);
        props?.onChange?.(newValue);
    };

    const renderHeaderEditor = () => (
        <InputList
            addType="button"
            draggable
            columns={paramColumns}
            value={value.headers || localValue.headers}
            onChange={(headers) => handleValueChange({ headers })}
        />
    );

    const renderQueryEditor = () => (
        <InputList
            addType="button"
            draggable
            columns={paramColumns}
            value={value.queryParams || localValue.queryParams}
            onChange={(queryParams) => handleValueChange({ queryParams })}
        />
    );

    const renderCookieEditor = () => (
        <InputList
            addType="button"
            draggable
            columns={paramColumns}
            value={value.cookies || localValue.cookies}
            onChange={(cookies) => handleValueChange({ cookies })}
        />
    );

    const renderFormEditor = () => (
        <>
            <Radio.Group
                style={{ margin: '16px 0' }}
                disabled={localValue.method === 'GET'}
                value={value.paramType || localValue.paramType}
                onChange={(e) => handleValueChange({ paramType: e.target.value })}
            >
                <Radio.Button value="FORM">Form表单</Radio.Button>
                <Radio.Button value="JSON">JSON</Radio.Button>
                <Radio.Button value="XML">XML</Radio.Button>
                <Radio.Button value="BINARY">二进制</Radio.Button>
            </Radio.Group>

            {(value.paramType || localValue.paramType) === 'FORM' ? (
                <InputList
                    addType="button"
                    draggable
                    columns={paramColumns}
                    value={value.formParams || localValue.formParams}
                    onChange={(formParams) => handleValueChange({ formParams })}
                />
            ) : (
                <TextArea
                    rows={8}
                    value={value.bodyContent || localValue.bodyContent}
                    onChange={(e) => handleValueChange({ bodyContent: e.target.value })}
                    placeholder={`请输入${(value.paramType || localValue.paramType) === 'JSON' ? 'JSON' : (value.paramType || localValue.paramType) === 'XML' ? 'XML' : '二进制文件描述'}`}
                />
            )}
        </>
    );

    // 定义参数编辑器选项卡项
    const paramTabItems = [
        { key: 'header', label: 'Header', children: renderHeaderEditor() },
        { key: 'query', label: 'Query', children: renderQueryEditor() },
        { key: 'cookie', label: 'Cookie', children: renderCookieEditor() },
        {
            key: 'body',
            label: 'Body',
            disabled: localValue.method === 'GET',
            children: renderFormEditor(),
        },
    ];

    return (
        <div style={{ width: '100%' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <div>
                    <label style={{ display: 'block', marginBottom: 8 }}>
                        请求信息 <span style={{ color: 'red' }}>*</span>
                    </label>
                    <Row gutter={8} align="middle">
                        <Col flex="120px">
                            <Select
                                style={{ width: '120px' }}
                                value={value.method || localValue.method}
                                onChange={(method) => handleValueChange({ method })}
                            >
                                <Option value="GET">GET</Option>
                                <Option value="POST">POST</Option>
                                <Option value="PUT">PUT</Option>
                                <Option value="DELETE">DELETE</Option>
                                <Option value="PATCH">PATCH</Option>
                            </Select>
                        </Col>
                        <Col flex="auto">
                            <Input
                                style={{ width: 'calc(100% - 100px)' }}
                                placeholder="请输入API地址"
                                value={value.url || localValue.url}
                                onChange={(e) => handleValueChange({ url: e.target.value })}
                            />
                        </Col>
                    </Row>
                </div>

                <Tabs activeKey={activeParamTab} onChange={setActiveParamTab} items={paramTabItems} />
            </Space>
        </div>
    );
};

export default ApiEditor;