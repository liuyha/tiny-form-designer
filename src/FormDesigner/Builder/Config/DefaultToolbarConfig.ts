import {ScreenTypeEnum} from "../../_Common/Enums/ScreenTypeEnum.ts";
import {IFormBuilderState} from "../../_Common/Types/IFormBuilderState.ts";
import {BaseBarConfigType} from "../../_Common/Types/BaseBarItemType.ts";
import {ROOT_SCHEMA_ID} from "../Context/Hooks/UseFormBuilderContext.ts";




export const DEFAULT_TOOLBAR_CONFIG: BaseBarConfigType = [
    {
        label: '左边',
        buttonType: 'icon',
        splitType: 'divider',
        bars: [
            {
                key: ScreenTypeEnum.SCREEN_PC,
                label: '电脑',
                icon: 'laptop',
                isActive: (state: IFormBuilderState) => {
                    const {activeScreen} = state
                    return ScreenTypeEnum.SCREEN_PC === activeScreen
                },
                onClick: (_event, contextHook) => {
                    const {actions} = contextHook
                    actions.setActiveScreen(ScreenTypeEnum.SCREEN_PC)
                }
            },
            {
                key: ScreenTypeEnum.SCREEN_PAD,
                label: '平板',
                icon: 'tablet',
                isActive: (state: IFormBuilderState) => {
                    const {activeScreen} = state
                    return ScreenTypeEnum.SCREEN_PAD === activeScreen
                },
                onClick: (_event, contextHook) => {
                    const {actions} = contextHook
                    actions.setActiveScreen(ScreenTypeEnum.SCREEN_PAD)
                }
            },
            {
                key: ScreenTypeEnum.SCREEN_MOBILE,
                label: '手机',
                icon: 'phone',
                split: true,
                isActive: (state: IFormBuilderState) => {
                    const {activeScreen} = state
                    return ScreenTypeEnum.SCREEN_MOBILE === activeScreen
                },
                onClick: (_event, contextHook) => {
                    const {actions} = contextHook
                    actions.setActiveScreen(ScreenTypeEnum.SCREEN_MOBILE)
                }
            }
        ]
    },
    {
        label: '中间',
        buttonType: 'icon',
        bars: [
            {
                key: 'undo',
                label: '撤销',
                icon: 'corner-up-left',
                isDisabled: (state: IFormBuilderState) => {
                    const {schemaHistory} = state
                    return schemaHistory.past.length === 0
                }
            },
            {
                key: 'redo',
                label: '恢复',
                icon: 'corner-up-right',
                isDisabled: (state: IFormBuilderState) => {
                    const {schemaHistory} = state
                    return schemaHistory.future.length === 0
                }
            }
        ]
    },
]


export const DEFAULT_RIGHT_TOOLBAR_CONFIG: BaseBarConfigType = [
    {
        label: '左边',
        splitType: 'divider',
        bars: [
            {
                key: 'restore',
                label: '清空',
                icon: 'laptop',
                color: 'danger',
                isDisabled: (state: IFormBuilderState) => {
                    return (state.schemas[0].children?.length || 0) === 0
                },
                onClick: (_event, contextHook) => {
                    const {actions} = contextHook
                    actions.clearSchemas()
                    actions.setSelectedSchemaId(ROOT_SCHEMA_ID)
                }
            }
        ]
    },
    {
        label: '右边',
        bars: [
            {
                key: 'save',
                label: '保存',
                icon: 'save',
                color: 'primary',
                isDisabled: (state: IFormBuilderState) => {
                    return (state.schemas[0].children?.length || 0) === 0
                },
                onClick: (_event, contextHook) => {
                    contextHook.actions.save()
                },
            }
        ]
    },
]