import React from "react";
import {BaseBarConfigType, BaseBarItemType} from "../../_Common/Types/BaseBarItemType.ts";
import {useFormBuilderContext} from "../Context/Hooks/UseFormBuilderContext.ts";
import classnames from "classnames";
import IconButton from "../../_Common/Components/IconButton";
import {Divider, Flex} from "antd";
import {FormBuilderContextHookType} from "../../_Common/Types/FormBuilderContextHookType.ts";

export type BarListProps = {
    bars?: BaseBarItemType [],
    buttonType?: BaseBarItemType['buttonType'],
    vertical?: boolean
    onClick?: (event: React.MouseEvent<any>, key: string, context: FormBuilderContextHookType) => void
    activeKey?: string | null
}

const BarList: React.FC<BarListProps> = (props) => {
    const context = useFormBuilderContext();
    const {state} = context
    return (
        <>
            {
                props.bars?.map(bar => {
                    const isActive = bar.key === props?.activeKey || (bar?.isActive && bar.isActive(state))
                    const dockItemClassNames = classnames(
                        'bar-item',
                        {
                            'active': bar.key === props?.activeKey
                        }
                    )
                    const buttonType = bar.buttonType || props.buttonType
                    return (
                        <React.Fragment key={bar.key}>
                            <div
                                className={dockItemClassNames}
                            >
                                <IconButton
                                    border={false}
                                    type={'text'}
                                    variant={'filled'}
                                    icon={bar.icon}
                                    label={bar.label}
                                    buttonType={buttonType}
                                    color={(isActive ? (bar.color || 'primary') : bar.color)}
                                    disabled={bar.isDisabled ? bar.isDisabled(state) : false}
                                    onClick={(e) => {
                                        props?.onClick && props.onClick(e, bar.key, context)
                                        bar?.onClick && bar.onClick(e, context)
                                    }}
                                >
                                </IconButton>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export type BarGroupProps = {
    group: BaseBarConfigType,
    buttonType?: BaseBarItemType['buttonType'],
    className?: string
    vertical?: boolean
    onClick?: BarListProps['onClick']
    activeKey?: BarListProps['activeKey']

}

const BarGroup: React.FC<BarGroupProps> = (props) => {

    const containerClassNames = classnames(
        'bar-group-container',
        props.className
    )

    return (
        <Flex className={containerClassNames} vertical={props.vertical}>
            {
                props.group.map((group, index) => {

                    const groupClassNames = classnames(
                        'bar-group',
                        {
                            [`bar-group__inline`]: !props.vertical
                        },
                        {
                            [`split__${props.vertical ? 'vertical' : 'horizontal'}`]: group.splitType === 'border'
                        }
                    )
                    return (
                        <React.Fragment key={index}>
                            <div className={groupClassNames}>
                                <BarList buttonType={group.buttonType} bars={group.bars} onClick={props.onClick} activeKey={props.activeKey}/>
                            </div>
                            {
                                group.splitType === 'divider' &&
                                <Divider type={props.vertical ? 'horizontal' : 'vertical'}></Divider>
                            }
                        </React.Fragment>
                    )
                })
            }
        </Flex>
    )
}

export {BarList, BarGroup}

const WrapperBarRender: typeof BarList & {
    Group: typeof BarGroup
} = BarList as any;

WrapperBarRender.Group = BarGroup


export default WrapperBarRender