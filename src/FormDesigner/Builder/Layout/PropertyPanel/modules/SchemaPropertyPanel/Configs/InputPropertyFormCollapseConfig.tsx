
import {IPropertyFormCollapseConfig} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {
    ExtendPropsAllowClear,
    BasicWrapperPropsDisabled,
    FormItemExtra,
    FormItemHelp,
    FormItemInitialValue,
    FormItemLabel, FormItemLabelAlign, FormItemLabelWidth, FormItemLayout,
    FormItemName,
    InputPlaceholder, BasicWrapperPropsReadOnly,
    FormItemRequired, FormItemRequiredMessage, FormItemTooltip, FormItemWrapperWidth
} from "./common/PropertyFormItemConfig.tsx";
const InputPropertyFormCollapseConfig = (): IPropertyFormCollapseConfig => {
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
                ]
            },
        ]
    }
}

export default InputPropertyFormCollapseConfig