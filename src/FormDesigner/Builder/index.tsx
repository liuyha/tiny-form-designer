import React from "react";
import {ConfigProvider, ThemeConfig} from "antd";
import {FormBuilderProvider} from "./Context/FormBuilderProvider.tsx";
import {IFormBuilderCustomConfig} from "../_Common/Types/IFormBuilderCustomConfig.ts";
import Builder from "./Builder.tsx";
import NiceModal from "@ebay/nice-modal-react";
import zhCN from 'antd/locale/zh_CN';
export type FormBuilderProps = {
    // 子元素
    children?: React.ReactNode,

    config?: IFormBuilderCustomConfig
}


const DEFAULT_CONFIG: ThemeConfig = {
    cssVar: true,
    token: {
        borderRadius: 0
    }
};
const FormBuilder: React.FC<FormBuilderProps> = (props) => {

    return (
        <ConfigProvider theme={DEFAULT_CONFIG} locale={zhCN}>
            <NiceModal.Provider>
                <FormBuilderProvider>
                    <Builder config={props.config}></Builder>
                </FormBuilderProvider>
            </NiceModal.Provider>
        </ConfigProvider>
    )
}

export default FormBuilder