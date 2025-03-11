import {IWidget} from "../../_Common/Types/IWidget.ts";
import {WidgetTypeEnum} from "../../_Common/Enums/WidgetTypeEnum.ts";

export const DEFAULT_WIDGET_CONFIG: IWidget [] = [
    {
        type: WidgetTypeEnum.ROOT,
        name: '表单',
        icon: 'form',
        groupKey: 'basic',
        defaultProps: {
            layout: 'horizontal',
            labelAlign: 'left',
            labelWrap: true,
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        },
        hidden: true
    },
    {
        type: WidgetTypeEnum.INPUT,
        name: '文本框',
        icon: 'input',
        groupKey: 'basic',
        defaultProps: {
            placeholder: '请输入',
        },
        defaultFormItemProps: {
            name: 'input',
            label: '文本框'
        },
        defaultExtendProps: {
            formItemProps: {
                required: {
                    message: '请输入'
                }
            }
        }
    },
    {
        type: WidgetTypeEnum.TEXTAREA,
        name: '文本域',
        icon: 'textarea',
        groupKey: 'basic',
        defaultProps: {
            placeholder: '请输入',
            allowClear: false
        },
        defaultFormItemProps: {
            name: 'textarea',
            label: '文本域'
        }
    },
    {
        type: WidgetTypeEnum.INPUT_NUMBER,
        name: '数字输入框',
        icon: 'input-number',
        groupKey: 'basic',
        defaultProps: {
            placeholder: '请输入'
        },
        defaultFormItemProps: {
            name: 'input_number',
            label: '数字输入框'
        }
    },
    {
        type: WidgetTypeEnum.INPUT_PASSWORD,
        name: '密码输入框',
        icon: 'input-password',
        groupKey: 'basic',
        defaultProps: {
            placeholder: '请输入密码',
            allowClear: false
        },
        defaultFormItemProps: {
            name: 'input_password',
            label: '密码输入框'
        }
    },
    {
        type: WidgetTypeEnum.SELECT,
        name: '下拉选择框',
        icon: 'select',
        groupKey: 'basic',
        defaultProps: {
            placeholder: '请选择',
            allowClear: false,
            options: [
                { label: '选项1', value: 'option1' },
                { label: '选项2', value: 'option2' },
                { label: '选项3', value: 'option3' },
            ]
        },
        defaultFormItemProps: {
            name: 'select',
            label: '下拉选择框'
        },
        defaultExtendProps: {
            optionDatasourceType: 'custom'
        }
    },
    {
        type: WidgetTypeEnum.RADIO,
        name: '单选框',
        icon: 'radio',
        groupKey: 'basic',
        defaultProps: {
            options: [
                { label: '选项1', value: 'option1' },
                { label: '选项2', value: 'option2' },
                { label: '选项3', value: 'option3' },
            ]
        },
        defaultFormItemProps: {
            name: 'radio',
            label: '单选框'
        },
        defaultExtendProps: {
            optionDatasourceType: 'custom'
        }
    },
    {
        type: WidgetTypeEnum.CHECKBOX,
        name: '复选框',
        icon: 'checkbox',
        groupKey: 'basic',
        defaultProps: {
            options: [
                { label: '选项1', value: 'option1' },
                { label: '选项2', value: 'option2' },
                { label: '选项3', value: 'option3' },
            ]
        },
        defaultFormItemProps: {
            name: 'checkbox',
            label: '复选框'
        },
        defaultExtendProps: {
            optionDatasourceType: 'custom'
        }
    },
    {
        type: WidgetTypeEnum.UPLOAD,
        name: '文件上传',
        icon: 'upload',
        groupKey: 'basic',
        defaultFormItemProps: {
            name: 'upload',
            label: '文件上传'
        },
        defaultProps: {
            name: 'file',
            action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
            listType: 'text',
            method: 'post',
            accept: '*',
        },
        defaultExtendProps: {

        }
    },
    {
        type: WidgetTypeEnum.DATE_PICKER,
        name: '日期选择',
        icon: 'date',
        groupKey: 'datetime',
        defaultProps: {
            format: 'YYYY-MM-DD'
        },
        defaultFormItemProps: {
            name: 'date',
            label: '日期'
        },
        defaultExtendProps: {

        }
    },
    {
        type: WidgetTypeEnum.TIME_PICKER,
        name: '时间选择',
        icon: 'time',
        groupKey: 'datetime',
        defaultProps: {
            format: 'HH:mm:ss'
        },
        defaultFormItemProps: {
            name: 'time',
            label: '时间'
        }
    },
    {
        type: WidgetTypeEnum.DATETIME_PICKER,
        name: '日期时间选择',
        icon: 'datetime',
        groupKey: 'datetime',
        defaultProps: {
            format: 'YYYY-MM-DD HH:mm:ss'
        },
        defaultFormItemProps: {
            name: 'datetime',
            label: '日期时间'
        }
    },
    {
        type: WidgetTypeEnum.DATE_RANGE_PICKER,
        name: '日期范围',
        icon: 'date-range',
        groupKey: 'datetime',
        defaultFormItemProps: {
            name: 'date_range',
            label: '日期范围'
        },
        defaultProps: {
            format: 'YYYY-MM-DD'
        }
    },
    {
        type: WidgetTypeEnum.TIME_RANGE_PICKER,
        name: '时间范围',
        icon: 'time-range',
        groupKey: 'datetime',
        defaultFormItemProps: {
            name: 'time_range',
            label: '时间范围'
        },
        defaultProps: {
            format: 'HH:mm:ss'
        }
    },
    {
        type: WidgetTypeEnum.DATETIME_RANGE_PICKER,
        name: '日期时间范围',
        icon: 'datetime-range',
        groupKey: 'datetime',
        defaultFormItemProps: {
            name: 'datetime_range',
            label: '日期时间范围'
        },
        defaultProps: {
            format: 'YYYY-MM-DD HH:mm:ss'
        }
    },
    {
        type: WidgetTypeEnum.TABLE,
        name: '数据表格',
        icon: 'table',
        groupKey: 'data',
        defaultFormItemProps: {
            name: 'table',
            label: '数据表格'
        }
    },
    {
        type: WidgetTypeEnum.LIST,
        name: '数据列表',
        icon: 'list',
        groupKey: 'data',
        defaultFormItemProps: {
            name: 'list',
            label: '数据列表'
        }
    },
    {
        type: WidgetTypeEnum.TREE,
        name: '树',
        icon: 'tree',
        groupKey: 'data',
        defaultFormItemProps: {
            name: 'tree',
            label: '树'
        }
    },
]