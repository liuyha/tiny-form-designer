import React from "react";
import './styles.css'
import classnames from "classnames";
import Icon from "../Icon";
import {Button, Empty, Input} from "antd";
import {isEqual} from "lodash";


export interface InputColumn {
    key: string;
    title: string;
    width?: number | string;
    placeholder?: string;
}

export type InputListProps<V = any> = {
    id?: string;
    value?: V []
    onChange?: (values: V[]) => void,
    columns: InputColumn []
    draggable?: boolean
    hideHeader?: true,
    addType?: 'button' | 'auto'
    className?: string
    style?: React.CSSProperties
}
const InputList = <V = any>(props: InputListProps<V>) => {
    const {id, value = [], onChange, columns, draggable, hideHeader = false, addType = 'auto', className, style} = props
    const [items, setItems] = React.useState<any[]>(value);
    const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null);
    const dragItemRef = React.useRef<HTMLTableRowElement | null>(null);
    const containerRef = React.useRef<HTMLTableElement>(null);
    const isDraggingRef = React.useRef<boolean>(false);
    React.useEffect(() => {
        if (!isEqual(items, value)) { // 只有当内容不同时才更新
            setItems(value);
        }
    }, [value, items]);


    // 添加全局事件监听，确保拖拽不会超出组件区域
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDraggingRef.current || !containerRef.current) return;

            // 获取容器边界
            const containerRect = containerRef.current.getBoundingClientRect();

            // 检查鼠标是否在容器内
            const isInContainer =
                e.clientX >= containerRect.left &&
                e.clientX <= containerRect.right &&
                e.clientY >= containerRect.top &&
                e.clientY <= containerRect.bottom;

            // 如果鼠标移出容器，取消拖拽
            if (!isInContainer) {
                // 模拟拖拽结束事件
                window.dispatchEvent(new Event('dragend'));
            }
        };

        // 添加全局鼠标移动事件监听
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    const handleChange = (rowIndex: number, columnKey: string, newValue: any) => {
        const newItems = [...items];
        if (!newItems[rowIndex]) {
            newItems[rowIndex] = {};
        }
        newItems[rowIndex][columnKey] = newValue;
        setItems(newItems);
        onChange?.(newItems);
        if (addType === 'auto' && items.length - 1 === rowIndex) {
            handleAddRow()
        }
    };

    const handleAddRow = () => {
        const newItems = [...items, {}];
        setItems(newItems);
        onChange?.(newItems);
    };

    const handleRemoveRow = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        onChange?.(newItems);
    };


    const handleDragStart = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
        setDraggedIndex(index);
        dragItemRef.current = e.currentTarget;
        e.currentTarget.classList.add('dragging');
        isDraggingRef.current = true;

        // 添加容器的拖拽状态类
        if (containerRef.current) {
            containerRef.current.classList.add('dragging');
        }


        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        if (draggedIndex === null) return;
        if (draggedIndex === index) return;

        // 确保鼠标在容器内
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const isInContainer =
                e.clientX >= containerRect.left &&
                e.clientX <= containerRect.right &&
                e.clientY >= containerRect.top &&
                e.clientY <= containerRect.bottom;

            if (isInContainer) {
                setDragOverIndex(index);
                e.dataTransfer.dropEffect = 'move';
            } else {
                setDragOverIndex(null);
                e.dataTransfer.dropEffect = 'none';
            }
        }
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        // 检查是否离开了容器
        if (containerRef.current && !containerRef.current.contains(e.relatedTarget as Node)) {
            // 如果离开了容器，取消拖拽效果
            setDragOverIndex(null);
        }
    };

    const handleDragEnd = () => {
        isDraggingRef.current = false;

        // 移除容器的拖拽状态类
        if (containerRef.current) {
            containerRef.current.classList.remove('dragging');
        }

        if (dragItemRef.current) {
            dragItemRef.current.classList.remove('dragging');
        }


        if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
            const newItems = [...items];
            const [movedItem] = newItems.splice(draggedIndex, 1);
            newItems.splice(dragOverIndex, 0, movedItem);

            setItems(newItems);
            onChange?.(newItems);
        }

        setDraggedIndex(null);
        setDragOverIndex(null);
    };


    const tableClassNames = classnames(
        'list-input-table',
        {
            'dragging': isDraggingRef.current
        },
        {
            [`${className}`]: className
        }
    )

    return (
        <div className={'list-input'}>
            <table
                id={id}
                className={tableClassNames}
                ref={containerRef}
                onDragLeave={draggable ? handleDragLeave : undefined}
                style={style}
            >
                <colgroup>
                    {draggable && (
                        <col width={60}/>
                    )}
                    {
                        columns.map((column, index) => {
                            return (
                                <col
                                    key={index}
                                    width={column.width}
                                />
                            )
                        })
                    }
                </colgroup>
                {
                    !hideHeader && <thead className={'list-input-header'}>
                    <tr>
                        {draggable && (
                            <th scope={'col'} className={'column-title'}>
                                <div className="drag-handle">
                                    <Icon name={'drag'}/>
                                </div>
                            </th>
                        )}
                        {
                            columns.map((column, index) => {
                                return (
                                    <th
                                        key={index}
                                        className={'column-title'}
                                        scope={'col'}
                                    >
                                        {column.title}
                                    </th>
                                )
                            })
                        }
                        <th scope={'col'}></th>
                    </tr>
                    </thead>
                }


                <tbody style={{minHeight: 100}}>
                {items.map((item, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={`list-input-row ${draggedIndex === rowIndex ? 'dragging' : ''} ${dragOverIndex === rowIndex ? 'drag-over' : ''}`}
                        draggable={draggable}
                        onDragStart={draggable ? (e) => handleDragStart(e, rowIndex) : undefined}
                        onDragOver={draggable ? (e) => handleDragOver(e, rowIndex) : undefined}
                        onDragEnter={draggable ? handleDragEnter : undefined}
                        onDragEnd={draggable ? handleDragEnd : undefined}
                    >
                        {draggable && (
                            <td className="list-input-column">
                                <div className="drag-handle">
                                    <Icon name={'drag'}/>
                                </div>
                            </td>
                        )}
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="list-input-column"
                            >
                                <Input
                                    placeholder={column.placeholder || column.title}
                                    value={item?.[column.key] || ''}
                                    onChange={(e) => handleChange(rowIndex, column.key, e.target.value)}
                                />
                            </td>
                        ))}
                        <td className="list-input-action">
                            <Button
                                type={'text'}
                                variant={'text'}
                                danger
                                className="list-input-remove-btn"
                                onClick={() => handleRemoveRow(rowIndex)}
                            >
                                删除
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
            {
                (!items || items.length === 0) && <Empty  style={{marginTop: 15}}/>
            }
            {
                addType === 'button' && <div className={'input-list-footer'}>
                <Button type={'text'} variant={'text'} color={'primary'} onClick={handleAddRow}>
                    添加一行
                </Button>
                </div>
            }
        </div>
    )
}

export default InputList