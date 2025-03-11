import React from "react";
import {Button, ButtonProps} from "antd";
import classnames from "classnames";
import './styles.css'
import Icon from "../Icon";

export type IconButtonProps = {
    icon?: React.ReactNode | string,
    border?: boolean,
    buttonType?: 'default' | 'text' | 'icon',
    label?: React.ReactNode | string,
} & Omit<ButtonProps, 'icon'>

const IconButton: React.FC<IconButtonProps> = (props) => {
    const { icon, border = true, buttonType = 'default', label,  ...restProps } = props

    const buildButtonIcon = () => {
        if (buttonType === 'text') {
            return undefined
        }
        return typeof icon === 'string' ?
            <Icon name={icon} color={restProps.color}></Icon> : icon
    }

    const classNames = classnames(
        'icon-button',
        props.rootClassName,
        props.className,
        {
            'border-hide': !border
        }
    )


    return (
        <Button
            {...restProps}
            icon={buildButtonIcon()}
            className={classNames}>
            {buttonType !== 'icon' ? label : undefined}
        </Button>
    )
}

export default IconButton