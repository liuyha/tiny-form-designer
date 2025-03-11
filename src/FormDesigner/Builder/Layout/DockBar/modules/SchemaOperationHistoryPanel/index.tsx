import {Dropdown, Timeline, TimelineProps} from "antd";
import React from "react";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";
import Icon from "../../../../../_Common/Components/Icon";
import dayjs from 'dayjs';

export type SchemaOperationHistoryPanelProps = {
    children?: React.ReactNode
}

const SchemaOperationHistoryPanel: React.FC<SchemaOperationHistoryPanelProps> = () => {

    const { state, actions } = useFormBuilderContext();

    const historyItems = React.useMemo(() => {
        const items: TimelineProps['items'] = state.schemaHistory.past.map((item) => {
            const {operation} = item
            return {
                dot: <Icon name={'time'}></Icon>,
                children: <>
                    <Dropdown
                        rootClassName={'history-dropdown-menu'}
                        trigger={['contextMenu']}
                        menu={{
                            items: [
                                {
                                    key: 'preview',
                                    label: '查看',
                                    icon: <Icon name={'eye'} />
                                },
                                {
                                    key: 'restore',
                                    label: '还原到此记录',
                                    icon: <Icon name={'restore'} />,
                                    onClick: () => {
                                        actions.recoverHistorySchemas(item.operation)
                                    }
                                }
                            ]
                        }}
                    >
                        <div className={'history-item'}>
                            <div>
                                {operation.name}
                            </div>
                            <div>
                                {dayjs(operation.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                        </div>
                    </Dropdown>

                </>,
            }
        })
        return items?.reverse()
    }, [state.schemaHistory])

    return (
        <div className={'history-panel'}>
            <Timeline
                items={historyItems}
            />
        </div>
    )
}

export default SchemaOperationHistoryPanel