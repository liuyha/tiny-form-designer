import {
    IPropertyFormCollapseConfig,
} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {
    BasicPropsAllowClear,
    BasicWrapperPropsDisabled,
    BasicDateTimePickerFormat,
    BasicDateTimePickerNeedConfirm,
    ExtendBlockWrapper,
    FormItemExtra,
    FormItemHelp,
    FormItemInitialValue,
    FormItemLabel,
    FormItemLabelAlign,
    FormItemLabelWidth,
    FormItemLayout,
    FormItemName,
    FormItemRequired,
    FormItemRequiredMessage,
    FormItemTooltip,
    FormItemWrapperWidth,
    InputPlaceholder,
    TimePickerHourStep,
    TimePickerMinuteStep,
    TimePickerSecondStep,
    TimePickerShowNow,
    TimePickerUse12Hours
} from "./common/PropertyFormItemConfig.tsx";

const TimeRangePickerPropertyFormCollapseConfig = (): IPropertyFormCollapseConfig => {
    return {
        key: 'BaseInput',
        label: '公共配置',
        collapseItems: [
            {
                key: 'basic',
                label: '基础配置',
                formItems: [
                    FormItemName,
                    FormItemLabel,
                    InputPlaceholder,
                    FormItemInitialValue,
                    FormItemRequired,
                    FormItemRequiredMessage,
                ]
            },
            {
                key: 'formItem',
                label: '表单项配置',
                formItems: [
                    FormItemLayout,
                    FormItemLabelAlign,
                    FormItemLabelWidth,
                    FormItemWrapperWidth,
                    FormItemTooltip,
                    FormItemHelp,
                    FormItemExtra,
                ]
            },
            {
                key: 'wrapper',
                label: '控件配置',
                formItems: [
                    BasicDateTimePickerFormat,
                    TimePickerHourStep,
                    TimePickerMinuteStep,
                    TimePickerSecondStep,
                    BasicDateTimePickerNeedConfirm,
                    TimePickerShowNow,
                    TimePickerUse12Hours,
                ]
            },
            {
                key: 'other',
                label: '其他配置',
                formItems: [
                    BasicWrapperPropsDisabled,
                    BasicPropsAllowClear,
                    ExtendBlockWrapper
                ]
            },
        ]
    }
}

export default TimeRangePickerPropertyFormCollapseConfig