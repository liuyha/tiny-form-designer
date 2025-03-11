
import {
    IPropertyFormCollapseConfig,
} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {
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
    UploadAccept,
    UploadAction,
    UploadDirectory,
    UploadListType,
    UploadMaxCount,
    UploadMethod,
    UploadName,
} from "./common/PropertyFormItemConfig.tsx";

const TextareaPropertyFormCollapseConfig = (): IPropertyFormCollapseConfig => {
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
                    UploadListType,
                    UploadDirectory,
                    UploadAction,
                    UploadMethod,
                    UploadName,
                    UploadAccept,
                    UploadMaxCount,
                ]
            },
        ]
    }
}

export default TextareaPropertyFormCollapseConfig