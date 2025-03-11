import React from "react";
import {Row} from "antd";
import WidgetGroupCard, {WidgetGroupData} from "./WidgetGroupCard.tsx";
import classnames from "classnames";
import {useFormBuilderConfig} from "../../../../Context/Hooks/UseFormBuilderConfig.ts";

export type ComponentDockPanelProps = {
    visible?: boolean
}


const ComponentDockPanel: React.FC<ComponentDockPanelProps> = () => {
    const formBuilderConfig = useFormBuilderConfig();

    const widgetGroupDataList = React.useMemo(() => {
        const {widgetGroups, widgets} = formBuilderConfig
        const dataList: WidgetGroupData [] = []
        widgetGroups.forEach(group => {
            const groupData = {...group} as WidgetGroupData
            groupData.widgets = widgets.filter(widget => widget.groupKey === group.key && !widget.hidden)
            dataList.push(groupData)
        })
        return dataList
    }, [])

    const classNames = classnames(
        'panel',
        'component-panel'
    )


    return (
        <div className={classNames}>
            <Row className={'component-list'}>
                {
                    widgetGroupDataList.map(group => {
                        return (
                            <WidgetGroupCard key={group.key} group={group}/>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ComponentDockPanel