import {
    IPropertyFormCollapseConfig,
} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {
    BasicWrapperPropsDisabled,
    BasicWrapperPropsReadOnly,
    ExtendBlockWrapper, ExtendPropsAllowClear, FormItemExtra, FormItemHelp,
    FormItemInitialValue,
    FormItemLabel, FormItemLabelAlign, FormItemLabelWidth,
    FormItemLayout,
    FormItemName,
    FormItemRequired,
    FormItemRequiredMessage, FormItemTooltip, FormItemWrapperWidth,
    InputNumberControls,
    InputNumberDecimalSeparator,
    InputNumberMax,
    InputNumberMin,
    InputNumberStep,
    InputPlaceholder
} from "./common/PropertyFormItemConfig.tsx";

const InputNumberPropertyFormCollapseConfig = (): IPropertyFormCollapseConfig => {
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
                key: 'other',
                label: '其他配置',
                formItems: [
                    BasicWrapperPropsReadOnly,
                    BasicWrapperPropsDisabled,
                    ExtendPropsAllowClear,
                    InputNumberControls,
                    ExtendBlockWrapper,
                    InputNumberDecimalSeparator,
                    InputNumberMin,
                    InputNumberMax,
                    InputNumberStep
                ]
            },
        ]
    }
}

export default InputNumberPropertyFormCollapseConfig