import {IStaticDatasource} from "../../../../../../../../_Common/Types/DatasourceType.ts";
import {Form, Input} from "antd";
import {FormModal} from "../../../../../../../../_Common/Components/FormModal";
import ApiEditor from "../../../../../../../../_Common/Components/ApiEditor";

export default FormModal.create<IStaticDatasource>(
    () => {

        return (
            <>
                <Form.Item name={'name'} label={'名称'} rules={[{required: true, message: '请输入名称'}]}>
                    <Input placeholder={'请输入名称'}/>
                </Form.Item>

                <Form.Item name={'description'} label={'描述'}>
                    <Input.TextArea rows={4} placeholder={'请输入名称'}/>
                </Form.Item>

                <Form.Item name={'data'}>
                    <ApiEditor/>
                </Form.Item>
            </>
        )
    }
    , {
        width: '80%',
        title: '远程接口'
    }
)