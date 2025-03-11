import React, { useEffect, useState } from 'react';
import {WidgetTypeEnum} from "../../_Common/Enums/WidgetTypeEnum.ts";
import classnames from "classnames";
import {useFormBuilderConfig} from "../Context/Hooks/UseFormBuilderConfig.ts";

interface SchemaElementHoverBoxProps {
    className?: string;
}

const SchemaElementHoverBox: React.FC<SchemaElementHoverBoxProps> = () => {
    const formBuilderConfig = useFormBuilderConfig();
    const [show, setShow] = useState(false);
    const [schemaWidgetType, setSchemaWidgetType] = useState<WidgetTypeEnum | null>(null);
    const [position, setPosition] = useState<React.CSSProperties>({});


    const showBox = (
        schemaElement: Element
    ) => {
        const widgetType = schemaElement.getAttribute('data-widget-type') as WidgetTypeEnum;
        const rect = schemaElement.getBoundingClientRect();
        setSchemaWidgetType(widgetType)
        setPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            display: 'block'
        })
        setShow(true)
    }

    const hideBox = () => {
        setSchemaWidgetType(null)
        setPosition({})
        setShow(false)
    }

    useEffect(() => {
        const updateHoverBox = (e: MouseEvent) => {
            if (!e.target) {
                setShow(false)
                return;
            }

            const target = e.target as HTMLElement;
            const schemaRenderer = target.closest('.schema-renderer');

            if (schemaRenderer) {
                showBox(schemaRenderer)
            } else {
                hideBox()
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            requestAnimationFrame(() => updateHoverBox(e));
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Also update on resize and scroll
        const handleUpdate = () => {
            const target = document.querySelector('.schema-renderer:hover');
            if (target) {
                showBox(target)
            } else {
                hideBox()
            }
        };

        window.addEventListener('resize', handleUpdate);
        document.addEventListener('scroll', handleUpdate, true);

        // Create a MutationObserver to watch for DOM changes
        const observer = new MutationObserver(() => {
            requestAnimationFrame(handleUpdate);
        });

        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleUpdate);
            document.removeEventListener('scroll', handleUpdate);
            observer.disconnect();
        };
    }, []);

    const widgetConfig = schemaWidgetType ? formBuilderConfig.widgets.find(w => w.type === schemaWidgetType) : null;


    const classNames = classnames(
        'schema-element-hovered-box'
    )

    return (
        <div className={classNames} style={position}>
            {widgetConfig && show && (
                <div className={'box-container'}>
                    {widgetConfig.name}
                </div>
            )}
        </div>
    );
};

export default SchemaElementHoverBox;