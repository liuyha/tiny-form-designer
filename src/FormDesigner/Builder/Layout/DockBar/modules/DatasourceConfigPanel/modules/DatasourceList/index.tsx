import React from "react";
import {Button, List, Popconfirm, Tag} from "antd";
import {DatasourceTypeEnum} from "../../../../../../../_Common/Enums/DatasourceTypeEnum.ts";
import {useFormBuilderContext} from "../../../../../../Context/Hooks/UseFormBuilderContext.ts";
import {DatasourceType} from "../../../../../../../_Common/Types/DatasourceType.ts";
import {FormModal} from "../../../../../../../_Common/Components/FormModal";
import IconButton from "../../../../../../../_Common/Components/IconButton";
import StaticDataFormModal from "./form/StaticDatasourceForm.tsx";
import ApiDatasourceForm from "./form/ApiDatasourceForm.tsx";
import DictionaryDatasourceForm from "./form/DictionaryDatasourceForm.tsx";

export type StaticDatasourceProps = {
    // 子元素
    type: DatasourceTypeEnum
}

export const FORM_COMPONENT_MAP: Partial<Record<DatasourceTypeEnum, React.FC<any>>> = {
    [DatasourceTypeEnum.static]: StaticDataFormModal,
    [DatasourceTypeEnum.dictionary]: DictionaryDatasourceForm,
    [DatasourceTypeEnum.api]: ApiDatasourceForm
}

const DatasourceList: React.FC<StaticDatasourceProps> = (props) => {
    const {state, actions} = useFormBuilderContext();

    const datasourceList = state.datasource.filter(item => item.type === props.type)


    const handleAdd = () => {
        FormModal.show<DatasourceType>(FORM_COMPONENT_MAP[props.type] as unknown as React.FC).then(res => {
            const values = {...res.values}
            values.type = props.type
            if (res.add) {
                actions.addDatasource(values)
            } else {
                actions.modifyDatasource(values)
            }
        })
    }

    const handleEdit = (item: DatasourceType) => {
        FormModal.show<DatasourceType>(FORM_COMPONENT_MAP[props.type] as unknown as React.FC, item).then(res => {
            const values = {...res.values}
            values.type = props.type
            actions.modifyDatasource(values)
        })
    }

    return (
        <>
            <div className={'panel-action-container'}>
                <Button
                    block
                    variant={'dashed'}
                    color={'primary'}
                    onClick={handleAdd}
                >新增</Button>
            </div>
            <div className={'datasource-list'}>
                <List
                    dataSource={datasourceList}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <IconButton
                                    border={false}
                                    variant={'text'}
                                    key="edit"
                                    icon={'edit'}
                                    onClick={() => handleEdit(item)}/>,
                                <Popconfirm
                                    title="确认提醒"
                                    description="是否确认删除?"
                                    onConfirm={() => actions.deleteDatasource(item?.id as unknown as string)}
                                >
                                    <IconButton
                                        border={false}
                                        variant={'text'}
                                        color={'danger'}
                                        key="delete"
                                        icon={'delete'}
                                    />
                                </Popconfirm>
                               ,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Tag color={'processing'}>V{item.version}</Tag>}
                                title={item.name}
                            ></List.Item.Meta>
                        </List.Item>
                    )}
                ></List>
            </div>
        </>
    )
}

export default DatasourceList