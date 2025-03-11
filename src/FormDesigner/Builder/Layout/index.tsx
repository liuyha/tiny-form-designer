import React from "react";
import {Layout} from "antd";
import DockBar from "./DockBar";
import ToolBar from "./ToolBar";
import PropertyPanel from "./PropertyPanel";
import BuilderCanvas from "./Canvas";

export type BuilderLayoutProps = {
    // 子元素
    children?: React.ReactNode
}

const BuilderLayout: React.FC<BuilderLayoutProps> = () => {

    return (
        <Layout className={'builder-layout'}>
            <DockBar/>
            <Layout className={'builder-layout-sub'}>
                <ToolBar/>
                <BuilderCanvas/>
            </Layout>
            <PropertyPanel/>
        </Layout>
    )
}

export default BuilderLayout