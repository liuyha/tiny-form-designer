import React from "react";
import {Layout} from "antd";
import DockPanel from "./DockPanel.tsx";
import BarRender from "../../Components/BarRender.tsx";
import {useFormBuilderConfig} from "../../Context/Hooks/UseFormBuilderConfig.ts";
import {useFormBuilderContext} from "../../Context/Hooks/UseFormBuilderContext.ts";

export type DockBarProps = {
    // 子元素
    children?: React.ReactNode
}

const DockBar: React.FC<DockBarProps> = () => {
    const formBuilderConfig = useFormBuilderConfig();
    const dockDrawerMountContainerRef = React.useRef<HTMLDivElement>(null);
    const { state } = useFormBuilderContext();



    return (
        <Layout.Sider
            ref={dockDrawerMountContainerRef}
            width={48}
            className={'dock-bar-container'}
        >
            <BarRender.Group
                className={'dock-bar'}
                vertical
                group={formBuilderConfig.dockBars}
                activeKey={state.activeDockKey}
                onClick={(_event, key, context) => {
                    context.actions.setActiveDockKey(key)
                }}
            />

            {
                state.activeDockKey && <DockPanel mountContainerRef={dockDrawerMountContainerRef}/>
            }

        </Layout.Sider>
    )
}

export default DockBar