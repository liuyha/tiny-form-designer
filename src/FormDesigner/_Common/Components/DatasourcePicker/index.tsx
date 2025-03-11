import React from "react";
import {useFormBuilderContext} from "../../../Builder/Context/Hooks/UseFormBuilderContext.ts";
import {DatasourceType} from "../../Types/DatasourceType.ts";
import {Button, Col, Divider, Row, Select} from "antd";
import {DatasourceTypeEnum} from "../../Enums/DatasourceTypeEnum.ts";
import {FormModal} from "../FormModal";
import {FORM_COMPONENT_MAP} from "../../../Builder/Layout/DockBar/modules/DatasourceConfigPanel/modules/DatasourceList";
import Icon from "../Icon";

export type DictionaryPickerProps = {
    type: DatasourceTypeEnum
    value?: DatasourceType,
    onChange?: (value: DatasourceType) => void
}

const DatasourcePicker: React.FC<DictionaryPickerProps> = (props) => {
    const {value, onChange, type} = props
    const [localValue, setLocalValue] = React.useState(value)
    const {state, actions} = useFormBuilderContext();
    const options = (
        state.datasource.filter(
            item => type === item.type
        ) as unknown as DatasourceType [])
        .map(item => {
            return {
                label: item.name,
                value: item.id,
                data: {...item}
            }
        })
    /**
     * 添加数据源
     */
    const handleAddDatasource = () => {
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

    return (
        <div className={'datasource-picker'}>
            <Row>
                <Col span={24}>
                    <Select
                        placeholder={'请选择数据源'}
                        style={{width: '100%'}}
                        options={options}
                        value={value?.id || localValue?.id}
                        onChange={(value) => {
                            const option = options.find(item => item.value === value)
                            const datasource = option && option.data || undefined
                            onChange?.(datasource as DatasourceType)
                            setLocalValue(datasource)
                        }}
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                                <Divider style={{margin: '8px 0'}}/>
                                <Button
                                    block
                                    type="text"
                                    variant={'text'}
                                    color={'primary'}
                                    icon={<Icon name={'plus'}/>}
                                    onClick={handleAddDatasource}
                                >
                                    添加数据源
                                </Button>
                            </>
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default DatasourcePicker