import React from "react";
import {Layout} from "antd";
import {useFormBuilderConfig} from "../../Context/Hooks/UseFormBuilderConfig.ts";
import BarRender from "../../Components/BarRender.tsx";

export type ToolBarProps = {
    // 子元素
    children?: React.ReactNode
}


const ToolBar: React.FC<ToolBarProps> = () => {
    const formBuilderConfig = useFormBuilderConfig();
    const toolbars = formBuilderConfig.toolBars

    return (
        <Layout.Header className={'tool-bar-container'}>
            {
                toolbars.left &&  <BarRender.Group className={'tool-bar'} group={toolbars.left}></BarRender.Group>
            }
            {
                toolbars.right &&  <BarRender.Group className={'tool-bar'} group={toolbars.right}></BarRender.Group>
            }
        </Layout.Header>
    )
}

export default ToolBar