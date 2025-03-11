
import {DockBarItemKeyEnum} from "../../_Common/Enums/DockBarItemKeyEnum.ts";
import {BaseBarConfigType} from "../../_Common/Types/BaseBarItemType.ts";


export const DEFAULT_DOCK_BAR_CONFIG: BaseBarConfigType = [
    {
        label: '顶部',
        buttonType: 'icon',
        splitType: 'border',
        bars: [
            {
                key: DockBarItemKeyEnum.COMPONENT,
                label: '组件',
                icon: 'puzzle',
                split: true
            }
        ]
    },
    {
        label: '中间',
        buttonType: 'icon',
        bars: [
            {
                key: DockBarItemKeyEnum.SCHEMA_STRUCTURE,
                label: '结构',
                icon: 'tree-1',
            },
            {
                key: DockBarItemKeyEnum.SCHEMA_CODE,
                label: 'Schema',
                icon: 'code'
            },
            {
                key: DockBarItemKeyEnum.DATASOURCE_CONFIG,
                label: '数据源配置',
                icon: 'database-config'
            },
            {
                key: DockBarItemKeyEnum.OPERATE_HISTORY,
                label: '历史记录',
                icon: 'history'
            }
        ]
    },
]