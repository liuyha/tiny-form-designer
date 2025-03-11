import {
    IPropertyFormCollapseConfig
} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {
    BasicWrapperPropsDisabled,
    BasicWrapperPropsReadOnly, ExtendPropsAllowClear,
    ExtendPropsOptionDatasourceType, FormItemExtra, FormItemHelp,
    FormItemInitialValue,
    FormItemLabel, FormItemLabelAlign, FormItemLabelWidth, FormItemLayout,
    FormItemName,
    FormItemRequired, FormItemRequiredMessage, FormItemTooltip, FormItemWrapperWidth,
    InputPlaceholder,
    SelectRadioCheckboxApiDatasource,
    SelectRadioCheckboxDictionaryDatasource,
    SelectRadioCheckboxOptions,
    SelectRadioCheckboxStaticDatasource
} from "./common/PropertyFormItemConfig.tsx";

const CheckboxPropertyFormCollapseConfig = (): IPropertyFormCollapseConfig => {
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
                key: 'option',
                label: '选项配置',
                formItems: [
                    ExtendPropsOptionDatasourceType,
                    SelectRadioCheckboxOptions,
                    SelectRadioCheckboxStaticDatasource,
                    SelectRadioCheckboxDictionaryDatasource,
                    SelectRadioCheckboxApiDatasource
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

export default CheckboxPropertyFormCollapseConfig