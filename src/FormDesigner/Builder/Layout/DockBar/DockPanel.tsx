import React from "react";
import {Card, Space} from "antd";
import IconButton from "../../../_Common/Components/IconButton";
import classnames from "classnames";
import {useFormBuilderContext} from "../../Context/Hooks/UseFormBuilderContext.ts";
import {DockBarItemKeyEnum} from "../../../_Common/Enums/DockBarItemKeyEnum.ts";
import ComponentDockPanel from "./modules/ComponentDockPanel";
import SchemaCodePanel from "./modules/SchemaCodePanel";
import SchemaStructurePanel from "./modules/SchemaStructurePanel";
import SchemaOperationHistoryPanel from "./modules/SchemaOperationHistoryPanel";
import {useFormBuilderConfig} from "../../Context/Hooks/UseFormBuilderConfig.ts";
import {findBar} from "../../../_Common/Utils/BarUtils.ts";
import DatasourceConfigPanel from "./modules/DatasourceConfigPanel";

export type DockPanelProps = {
    // 子元素
    mountContainerRef?: React.RefObject<HTMLDivElement>
}

const DockPanel: React.FC<DockPanelProps> = (props) => {
    const formBuilderConfig = useFormBuilderConfig();
    const {state, actions} = useFormBuilderContext();
    const dockDrawerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const mountContainerRef = props.mountContainerRef || dockDrawerRef
        const handleClickOutside = (event: MouseEvent) => {
            if (mountContainerRef.current && !mountContainerRef.current.contains(event.target as Node)) {
                if (!state.pinDockPanel) {
                    actions.setActiveDockKey(null)
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [actions, state.pinDockPanel]);

    const classNames = classnames(
        'dock-panel',
        {
            'visible': state.activeDockKey !== null
        }
    )

    const handleClose = () => {
        actions.setActiveDockKey(null)
    }

    const handlePin = () => {
        actions.setPinDockPanel(!state.pinDockPanel)
    }

    const activeDock = findBar(formBuilderConfig.dockBars, state.activeDockKey)
    return (
        <div ref={dockDrawerRef} className={classNames}>
            <Card
                rootClassName={'panel-card'}
                title={activeDock?.label}
                extra={
                    <>
                        <Space className={'extra-action-container'}>
                            <IconButton
                                color={state.pinDockPanel ? 'primary' : 'default'}
                                variant={'text'}
                                icon={ state.pinDockPanel ? 'pin-off' : 'pin' }
                                border={false}
                                onClick={handlePin}></IconButton>
                            <IconButton icon={'close'} border={false} onClick={handleClose}></IconButton>
                        </Space>
                    </>
                }
            >
                <div className={'panel-container'}>
                    {
                        DockBarItemKeyEnum.COMPONENT === state.activeDockKey && <ComponentDockPanel />
                    }
                    {
                        DockBarItemKeyEnum.SCHEMA_CODE === state.activeDockKey && <SchemaCodePanel />
                    }
                    {
                        DockBarItemKeyEnum.SCHEMA_STRUCTURE === state.activeDockKey && <SchemaStructurePanel />
                    }
                    {
                        DockBarItemKeyEnum.OPERATE_HISTORY === state.activeDockKey && <SchemaOperationHistoryPanel />
                    }
                    {
                        DockBarItemKeyEnum.DATASOURCE_CONFIG === state.activeDockKey && <DatasourceConfigPanel />
                    }
                </div>
            </Card>
        </div>
    )
}

export default DockPanel