import {Segmented} from "antd";
import React from "react";
import {SegmentedProps} from "antd/es/segmented";
import Icon from "../../../../../_Common/Components/Icon";
import DatasourceList from "./modules/DatasourceList";
import {DatasourceTypeEnum} from "../../../../../_Common/Enums/DatasourceTypeEnum.ts";

export type DatasourceConfigPanelProps = {
    // 子元素
    children?: React.ReactNode
}

const options: SegmentedProps<string>['options'] = [
    {
        label: '静态数据',
        icon: <Icon name={'data-static'}/>,
        value: 'static'
    },
    {
        label: '字典数据',
        icon: <Icon name={'data-dictionary'}/>,
        value: 'dictionary'
    },
    {
        label: '远程接口',
        icon: <Icon name={'data-api'}/>,
        value: 'api'
    }
]

const DatasourceConfigPanel: React.FC<DatasourceConfigPanelProps> = () => {
    const [activeSegmentedOption, setActiveSegmentedOption] = React.useState(DatasourceTypeEnum.static)
    return (
        <div className={'datasource-config-dock-panel'}>

            <div className={'panel-header'}>
                <Segmented<string>
                    className={'datasource-type-segmented'}
                    options={options}
                    block
                    onChange={(key) => {
                        setActiveSegmentedOption(key as DatasourceTypeEnum)
                    }}
                />
            </div>

            <div className={'panel-body'}>
                <DatasourceList type={activeSegmentedOption}/>

            </div>
        </div>
    )
}

export default DatasourceConfigPanel