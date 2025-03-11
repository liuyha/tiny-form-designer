import React from "react";
import {IWidgetGroup} from "../../../../../_Common/Types/IWidgetGroup.ts";
import {IWidget} from "../../../../../_Common/Types/IWidget.ts";
import {Card} from "antd";
import Icon from "../../../../../_Common/Components/Icon";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";

export type WidgetGroupData = IWidgetGroup & { widgets: IWidget [] }
export type WidgetGroupCardProps = {
    group: WidgetGroupData
}

const WidgetGroupCard: React.FC<WidgetGroupCardProps> = (props) => {
    const {group} = props
    const {actions} = useFormBuilderContext();

    const handleDragStart = (e: React.DragEvent, widget: IWidget) => {
        e.dataTransfer.effectAllowed = 'move';
        actions.setDraggedWidget(widget)
    }

    return (
        <Card
            className={'widget-group-card'}
            title={group.name}
        >
            <div className={'widget-group-container'}>
                {
                    group.widgets.map(widget => {
                        return (
                            <div
                                key={widget.type}
                                className={'widget-item'}
                                draggable
                                onDragStart={(event) => handleDragStart(event, widget)}
                            >
                                <Icon name={widget.icon}></Icon>
                                <span>{widget.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </Card>
    )
}

export default WidgetGroupCard