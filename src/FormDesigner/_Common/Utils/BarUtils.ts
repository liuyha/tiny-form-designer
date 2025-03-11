import {BaseBarConfigType, BaseBarGroupType, BaseBarItemType} from "../Types/BaseBarItemType.ts";


export const findBar = (bars: BaseBarConfigType | BaseBarItemType [] | undefined, key?: string | null): BaseBarItemType | undefined => {
    if (!bars || !key) {
        return undefined
    }
    const first = bars[0]
    if ('bars' in first) {
        const groups = bars as BaseBarGroupType [];
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i]
            const bar = findBar(group.bars, key);
            if (bar) {
                return bar
            }
        }

    } else {
        const barList = bars as BaseBarItemType []
        return barList.find(item => item.key === key)
    }
    return undefined
}