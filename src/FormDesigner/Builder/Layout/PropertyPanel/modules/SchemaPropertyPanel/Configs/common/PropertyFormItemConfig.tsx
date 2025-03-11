import {DatePicker, DatePickerProps, Dropdown, Input, InputNumber, InputProps, MenuProps, Radio, Select} from "antd";
import {PropertyFormItem} from "../../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {DatasourceTypeEnum} from "../../../../../../../_Common/Enums/DatasourceTypeEnum.ts";
import InputList, {InputColumn} from "../../../../../../../_Common/Components/InputList";
import {IWidgetSchema} from "../../../../../../../_Common/Types/IWidgetSchema.ts";
import DatasourcePicker from "../../../../../../../_Common/Components/DatasourcePicker";
import React from "react";
import Icon from "../../../../../../../_Common/Components/Icon/index.tsx";

/**
 * 字段名
 */
export const FormItemName: PropertyFormItem = {
    name: 'formItemProps.name',
    label: '字段名',
    render: <Input placeholder={'请输入字段名'}/>
}
/**
 * 字段标题
 */
export const FormItemLabel: PropertyFormItem = {
    name: 'formItemProps.label',
    label: '字段标题',
    render: <Input placeholder={'请输入字段标题'}/>
}
/**
 * 提示文案
 */
export const InputPlaceholder: PropertyFormItem = {
    name: 'props.placeholder',
    label: '提示文案',
    render: <Input placeholder={'请输入提示文案'}/>
}

/**
 * 默认值
 */
export const FormItemInitialValue: PropertyFormItem = {
    name: 'formItemProps.initialValue',
    label: '默认值',
    render: <Input placeholder={'请输入默认值'}/>
}

/**
 * 是否必填
 */
export const FormItemRequired: PropertyFormItem = {
    name: 'formItemProps.required',
    label: '是否必填',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 未填提示
 */
export const FormItemRequiredMessage: PropertyFormItem = {
    name: 'extendProps.formItemProps.required.message',
    label: '未填提示',
    render: <Input placeholder={'默认："请输入+字段标题'}/>
}

/**
 * 表单布局
 */
export const FormItemLayout: PropertyFormItem = {
    name: 'formItemProps.layout',
    label: '表单布局',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '水平', value: 'horizontal'},
            {label: '垂直', value: 'vertical'},
        ]}
    />
}

/**
 * 标签对齐方式
 */
export const FormItemLabelAlign: PropertyFormItem = {
    name: 'formItemProps.labelAlign',
    label: '标签对齐方式',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '左对齐', value: 'left'},
            {label: '右对齐', value: 'right'},
        ]}
    />
}

/**
 * 标签宽度
 */
export const FormItemLabelWidth: PropertyFormItem = {
    name: 'formItemProps.labelCol.span',
    label: '标签宽度',
    render: <InputNumber min={0} max={24} placeholder={'默认跟随表单标签宽度'}/>
}

/**
 * 控件宽度
 */
export const FormItemWrapperWidth: PropertyFormItem = {
    name: 'formItemProps.wrapperCol.span',
    label: '控件宽度',
    render: <InputNumber min={0} max={24} placeholder={'默认跟随表单控件宽度'}/>
}

/**
 * 提示信息
 */
export const FormItemTooltip: PropertyFormItem = {
    name: 'formItemProps.tooltip',
    label: '提示信息',
    render: <Input placeholder={'请输入提示信息'}/>
}

/**
 * 帮助信息
 */
export const FormItemHelp: PropertyFormItem = {
    name: 'formItemProps.help',
    label: '帮助信息',
    render: <Input placeholder={'请输入帮助信息'}/>
}

/**
 * 扩展信息
 */
export const FormItemExtra: PropertyFormItem = {
    name: 'formItemProps.extra',
    label: '扩展信息',
    render: <Input placeholder={'请输入扩展信息'}/>
}

/**
 * 基础控件属性 是否只读
 */
export const BasicWrapperPropsReadOnly: PropertyFormItem = {
    name: 'props.readOnly',
    label: '是否只读',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 基础控件属性 是否禁用
 */
export const BasicWrapperPropsDisabled: PropertyFormItem = {
    name: 'props.disabled',
    label: '是否禁用',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}


/**
 * 扩展基础控件属性 支持清除
 */
export const BasicPropsAllowClear: PropertyFormItem = {
    name: 'props.allowClear',
    label: '支持清除',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}
/**
 * 扩展基础控件属性 支持清除
 */
export const ExtendPropsAllowClear: PropertyFormItem = {
    name: 'extendProps.props.allowClear',
    label: '支持清除',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 数字输入框  增减按钮
 */
export const InputNumberControls: PropertyFormItem = {
    name: 'props.controls',
    label: '增减按钮',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 扩展块级控件
 */
export const ExtendBlockWrapper: PropertyFormItem = {
    name: 'extendProps.blockWrapper',
    label: '块级控件',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 数字输入框  小数点
 */
export const InputNumberDecimalSeparator: PropertyFormItem = {
    name: 'props.decimalSeparator',
    label: '小数点',
    render: <Input/>
}

/**
 * 数字输入框  最小值
 */
export const InputNumberMin: PropertyFormItem = {
    name: 'props.min',
    label: '最小值',
    render: <InputNumber min={0}/>
}

/**
 * 数字输入框  最大值
 */
export const InputNumberMax: PropertyFormItem = {
    name: 'props.max',
    label: '最大值',
    render: <InputNumber/>
}

/**
 * 数字输入框  单步步长
 */
export const InputNumberStep: PropertyFormItem = {
    name: 'props.step',
    label: '单步步长',
    render: <InputNumber/>
}

/**
 * 密码输入框  显隐按钮
 */
export const InputPasswordVisibilityToggle: PropertyFormItem = {
    name: 'extendProps.props.visibilityToggle',
    label: '显隐按钮',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}


/**
 * 单选框  选项类型
 */
export const RadioOptionType: PropertyFormItem = {
    name: 'props.optionType',
    label: '选项类型',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '默认', value: 'default'},
            {label: '按钮', value: 'button'},
        ]}
    />
}


/**
 * 单选框  铺满宽度
 */
export const RadioBlock: PropertyFormItem = {
    name: 'props.block',
    label: '铺满宽度',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}


/**
 * 扩展配置  数据源类型
 */
export const ExtendPropsOptionDatasourceType: PropertyFormItem = {
    name: 'extendProps.optionDatasourceType',
    label: '数据源类型',
    render: <Radio.Group block optionType={'button'} options={[
        {label: '自定义', value: DatasourceTypeEnum.custom},
        {label: '静态数据', value: DatasourceTypeEnum.static},
        {label: '数据字典', value: DatasourceTypeEnum.dictionary},
        {label: '远程接口', value: DatasourceTypeEnum.api},
    ]}></Radio.Group>
}


const optionColumns: InputColumn [] = [
    {key: 'label', title: '标签名', placeholder: '请输入标签名'},
    {key: 'value', title: '标签值', placeholder: '请输入标标签值'},
]

const getOptionDatasourceType = (schema: IWidgetSchema) => {
    return (schema.extendProps && schema.extendProps['optionDatasourceType']) || (schema.defaultExtendProps && schema.defaultExtendProps['optionDatasourceType'])
}

/**
 * 下拉框/单选框/复选框  选项
 */
export const SelectRadioCheckboxOptions: PropertyFormItem = {
    name: 'props.options',
    label: '选项',
    noStyle: true,
    render: ({schema}) => {
        const optionDatasourceType = getOptionDatasourceType(schema)
        if (optionDatasourceType == DatasourceTypeEnum.custom) {
            return <InputList addType={'button'} draggable columns={optionColumns}></InputList>
        }
        return undefined
    }
}

/**
 * 下拉框/单选框/复选框  静态数据源
 */
export const SelectRadioCheckboxStaticDatasource: PropertyFormItem = {
    name: 'extendProps.optionsStatic',
    label: '静态数据源',
    noStyle: true,
    render: ({schema}) => {
        const optionDatasourceType = getOptionDatasourceType(schema)
        if (optionDatasourceType === DatasourceTypeEnum.static) {
            return <DatasourcePicker type={DatasourceTypeEnum.static}/>
        }
        return undefined
    }
}

/**
 * 下拉框/单选框/复选框  字典数据源
 */
export const SelectRadioCheckboxDictionaryDatasource: PropertyFormItem = {
    name: 'extendProps.optionsDictionary',
    label: '字典数据源',
    noStyle: true,
    render: ({schema}) => {
        const optionDatasourceType = getOptionDatasourceType(schema)
        if (optionDatasourceType === DatasourceTypeEnum.dictionary) {
            return <DatasourcePicker type={DatasourceTypeEnum.dictionary}/>
        }
        return undefined
    }
}

/**
 * 下拉框/单选框/复选框  远程接口数据源
 */
export const SelectRadioCheckboxApiDatasource: PropertyFormItem = {
    name: 'extendProps.optionsApi',
    label: '远程接口数据源',
    noStyle: true,
    render: ({schema}) => {
        const optionDatasourceType = getOptionDatasourceType(schema)
        if (optionDatasourceType === DatasourceTypeEnum.api) {
            return <DatasourcePicker type={DatasourceTypeEnum.api}/>
        }
        return undefined
    }
}

/**
 * 下拉框  选中模式
 */
export const SelectMode: PropertyFormItem = {
    name: 'props.mode',
    label: '选中模式',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '多选', value: 'multiple'},
            {label: '标签', value: 'tags'},
        ]}
    />
}

/**
 * 下拉框  最多选择
 */
export const SelectMaxCount: PropertyFormItem = {
    name: 'props.maxCount',
    label: '最多选择',
    render: <InputNumber suffix={'个'}/>
}

/**
 * 下拉框  最大显示
 */
export const SelectMaxTagTextLength: PropertyFormItem = {
    name: 'props.maxTagTextLength',
    label: '最大显示',
    render: <InputNumber suffix={'个'}/>
}

/**
 * 文本域  行数
 */
export const TextareaRows: PropertyFormItem = {
    name: 'props.rows',
    label: '行数',
    render: <InputNumber min={1}/>
}

/**
 * 公共输入框  最小长度
 */
export const CommonInputMinLength: PropertyFormItem = {
    name: 'props.minLength',
    label: '最小长度',
    render: <InputNumber min={0}/>
}

/**
 * 公共输入框  最大长度
 */
export const CommonInputMaxLength: PropertyFormItem = {
    name: 'props.maxLength',
    label: '最大长度',
    render: <InputNumber/>
}

/**
 * 公共输入框  显示字数
 */
export const CommonInputShowCount: PropertyFormItem = {
    name: 'props.showCount',
    label: '显示字数',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 文本域  自动高度
 */
export const TextareaAutoSize: PropertyFormItem = {
    name: 'props.autoSize',
    label: '自动高度',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 上传  样式
 */
export const UploadListType: PropertyFormItem = {
    name: 'props.listType',
    label: '样式',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '默认', value: 'text'},
            {label: '图片', value: 'picture'},
            {label: '照片墙', value: 'picture-card'},
            {label: '圆形照片墙', value: 'picture-circle'},
        ]}
    />
}

const AcceptDataMap: Record<string, {
    accept: string,
    label: string
}> = {
    'document': {
        label: '文档',
        accept: '.pdf,.doc,.docx,.xls,.xlsx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    'image': {
        label: '图片',
        accept: 'image/*'
    },
    'video': {
        label: '视频',
        accept: 'video/*'
    },
    'audio': {
        label: '音频',
        accept: 'audio/*'
    },
    'zip': {
        label: '压缩包',
        accept: '.zip,.rar,.7z'
    },
    'all': {
        label: '所有文件',
        accept: '*'
    }
}

const AcceptInput: React.FC<InputProps> = (props) => {

    const acceptOptions: MenuProps['items'] = Object.keys(AcceptDataMap).map(key => {
        const acceptData = AcceptDataMap[key]
        return {
            key: key,
            label: acceptData.label,
            onClick: () => {
                props.onChange?.(acceptData.accept as any)
            }
        }
    })
    return (
        <Input
            placeholder={'文件类型'}
            addonAfter={(
                <Dropdown
                    menu={{items: acceptOptions}}
                    placement={'bottomRight'}
                    trigger={['click']}

                >
                    <Icon name={'book'}/>
                </Dropdown>


            )}
            {...props}
        />
    )
}

/**
 * 上传  文件类型
 */
export const UploadAccept: PropertyFormItem = {
    name: 'props.accept',
    label: '文件类型',
    render: <AcceptInput placeholder={'请输入文件类型'}/>
}

/**
 * 上传  参数名
 */
export const UploadName: PropertyFormItem = {
    name: 'props.name',
    label: '参数名',
    render: <Input placeholder={'请输入参数名'}/>
}

/**
 * 上传  上传地址
 */
export const UploadAction: PropertyFormItem = {
    name: 'props.action',
    label: '上传地址',
    render: <Input.TextArea rows={4} placeholder={'请输入上传地址'}/>
}

/**
 * 上传  支持上传文件夹
 */
export const UploadDirectory: PropertyFormItem = {
    name: 'props.directory',
    label: '支持上传文件夹',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '是', value: true},
            {label: '否', value: false},
        ]}
    />
}

/**
 * 上传  最大上传数量
 */
export const UploadMaxCount: PropertyFormItem = {
    name: 'props.maxCount',
    label: '最大上传数量',
    render: <InputNumber placeholder={'请输入最大上传数量'}/>
}

/**
 * 上传  HTTP请求方式
 */
export const UploadMethod: PropertyFormItem = {
    name: 'props.method',
    label: 'HTTP请求方式',
    render: <Select
        placeholder={'请选择HTTP请求方式'}
        options={[
            {label: 'POST', value: 'post'},
            {label: 'PUT', value: 'put'},
            {label: 'PATCH', value: 'patch'},
            {label: 'GET', value: 'get'},
            {label: 'DELETE', value: 'delete'},
            {label: 'HEAD', value: 'head'},
            {label: 'OPTIONS', value: 'options'},
        ]}
    />
}

/**
 * 日期时间  格式
 */
export const BasicDateTimePickerFormat: PropertyFormItem = {
    name: 'props.format',
    label: '格式',
    render: <Input placeholder={'请输入格式'}/>
}
/**
 * 日期时间  确认按钮
 */
export const BasicDateTimePickerNeedConfirm: PropertyFormItem<DatePickerProps> = {
    name: 'props.needConfirm',
    label: '确认按钮',
    render:<Radio.Group
        optionType="button"
        options={[
            {label: '显示', value: true},
            {label: '不显示', value: false},
        ]}
    />
}

/**
 * 日期  最小日期
 */
export const DatePickerMinDate: PropertyFormItem<DatePickerProps> = {
    name: 'props.minDate',
    label: '最小日期',
    render: ({schema}) => {
        const props = schema.props || {};
        return (
            <DatePicker format={props.format} placeholder={'请输入最小日期'}/>
        )
    }
}

/**
 * 日期  最大日期
 */
export const DatePickerMaxDate: PropertyFormItem<DatePickerProps> = {
    name: 'props.maxDate',
    label: '最大日期',
    render: ({schema}) => {
        const props = schema.props || {};
        return (
            <DatePicker format={props.format} placeholder={'请输入最大日期'}/>
        )
    }
}


/**
 * 日期  选择器类型
 */
export const DatePickerPicker: PropertyFormItem<DatePickerProps> = {
    name: 'props.picker',
    label: '选择器类型',
    render:<Radio.Group
        optionType="button"
        options={[
            {label: '年', value: 'year'},
            {label: '季度', value: 'quarter'},
            {label: '月', value: 'month'},
            {label: '周', value: 'week'},
            {label: '日期', value: 'date'},
        ]}
    />
}



/**
 * 时间  小时间隔
 */
export const TimePickerHourStep: PropertyFormItem = {
    name: 'props.hourStep',
    label: '小时间隔',
    render: <InputNumber placeholder={'请输入小时间隔'}/>
}

/**
 * 时间  分钟间隔
 */
export const TimePickerMinuteStep: PropertyFormItem = {
    name: 'props.minuteStep',
    label: '分钟间隔',
    render: <InputNumber placeholder={'请输入分钟间隔'}/>
}

/**
 * 时间  秒间隔
 */
export const TimePickerSecondStep: PropertyFormItem = {
    name: 'props.secondStep',
    label: '秒间隔',
    render: <InputNumber placeholder={'请输入秒间隔'}/>
}

/**
 * 时间  显示此刻
 */
export const TimePickerShowNow: PropertyFormItem = {
    name: 'props.showNow',
    label: '显示此刻',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '显示', value: true},
            {label: '不显示', value: false},
        ]}
    />
}

/**
 * 时间  显示风格
 */
export const TimePickerUse12Hours: PropertyFormItem = {
    name: 'props.use12Hours',
    label: '显示风格',
    render: <Radio.Group
        optionType="button"
        options={[
            {label: '12小时', value: true},
            {label: '24小时', value: false},
        ]}
    />
}


