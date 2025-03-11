import React, { useEffect, useState } from 'react';
import {useFormBuilderContext} from "../Context/Hooks/UseFormBuilderContext.ts";
import Icon from "../../_Common/Components/Icon";

interface SchemaElementSelectedBoxProps {
    children?: React.ReactNode;
}

const SchemaElementSelectedBox: React.FC<SchemaElementSelectedBoxProps> = () => {
    const { state, actions } = useFormBuilderContext();
    const selectedSchemaId = state.selectedSchemaId;
    const schemas = state.schemas;
    const [style, setStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        const updatePosition = () => {
            if (!selectedSchemaId) {
                setStyle(prev => ({ ...prev, display: 'none' }));
                return;
            }

            let element;
            if (selectedSchemaId === 'root') {
                element = document.querySelector('.canvas form');
            } else {
                element = document.querySelector(`[data-schema-id="${selectedSchemaId}"]`);
            }

            if (element) {
                const rect = element.getBoundingClientRect();
                setStyle({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                });
            }
        };

        updatePosition();

        window.addEventListener('resize', updatePosition);
        document.addEventListener('scroll', updatePosition, true);

        const observer = new MutationObserver(() => {
            requestAnimationFrame(updatePosition);
        });

        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });

        return () => {
            window.removeEventListener('resize', updatePosition);
            document.removeEventListener('scroll', updatePosition);
            observer.disconnect();
        };
    }, [selectedSchemaId]);


    if (!selectedSchemaId) return null;

    const schema = selectedSchemaId === 'root'
        ? schemas[0]
        : schemas[0].children?.find(s => s.id === selectedSchemaId);
    if (!schema) return null;


    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedSchemaId === 'root') return;
        const newSchema = {
            ...schema,
            id: crypto.randomUUID()
        };
        actions.addSchema(newSchema);
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedSchemaId === 'root') return;
        actions.deleteSchema(selectedSchemaId);
        actions.setSelectedSchemaId(null);
    };

    const buttonStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        padding: 0,
        border: 'none',
        background: 'var(--ant-color-primary)',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.2s'
    };

    return (
        <div className={'schema-element-selected-box'} style={style}>
            <div
                className={'action-box'}
                style={{
                    position: 'absolute',
                    top: -24,
                    right: -1,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 8px',
                        background: 'var(--ant-color-primary)',
                        color: '#fff',
                        fontSize: 12,
                        borderRadius: '2px 2px 0 0',
                        whiteSpace: 'nowrap',
                        marginRight: selectedSchemaId === 'root' ? 0 : 4
                    }}
                >
                    {schema.name}
                </div>
                {selectedSchemaId !== 'root' && (
                    <>
                        <button
                            onClick={handleCopy}
                            style={buttonStyle}
                        >
                            <Icon name={'copy-code'}></Icon>
                        </button>
                        <button
                            onClick={handleDelete}
                            style={buttonStyle}
                        >
                            <Icon name={'delete'}></Icon>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SchemaElementSelectedBox;