import {IStaticDatasource} from "../../../../../../../../_Common/Types/DatasourceType.ts";
import {Form, Input} from "antd";
import {FormModal} from "../../../../../../../../_Common/Components/FormModal";
import InputList, {InputColumn} from "../../../../../../../../_Common/Components/InputList";

const optionColumns: InputColumn [] = [
    {key: 'label', title: '标签名', placeholder: '请输入标签名'},
    {key: 'value', title: '标签值', placeholder: '请输入标标签值'},
]
export default FormModal.create<IStaticDatasource>(
    () => {

        return (
            <>
                <Form.Item name={'name'} label={'名称'} rules={[{required: true, message: '请输入名称'}]}>
                    <Input placeholder={'请输入名称'}/>
                </Form.Item>
                <Form.Item name={'code'} label={'编码'} rules={[{required: true, message: '请输入编码'}]}>
                    <Input placeholder={'请输入编码'}/>
                </Form.Item>

                <Form.Item name={'description'} label={'描述'}>
                    <Input.TextArea rows={4} placeholder={'请输入名称'}/>
                </Form.Item>

                <Form.Item name={'data'} label={'数据'}>
                    <InputList addType={'button'} draggable columns={optionColumns}></InputList>
                </Form.Item>
            </>
        )
    }
    , {
        width: '80%',
        title: '字典数据'
    }
)