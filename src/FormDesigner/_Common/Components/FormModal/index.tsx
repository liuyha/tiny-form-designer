import React, {useEffect} from "react";
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import {Form, Input, Modal, ModalProps} from "antd";
import {hasValue} from "../../Utils/Other.ts";

type FormModalResult<T extends Record<any, any>> = {
    add: boolean,
    update: boolean,
    values: T
}

export const FormModal = {
    create: <P extends Record<any, any>>(
        Component: React.ComponentType<any>,
        props?: ModalProps & {
            idKey?: string
        }
    ) => {
        return NiceModal.create<P>((initValues) => {
                const {title = '', idKey = 'id', ...restProps} = props || {}
                const [form] = Form.useForm();
                const modal = useModal();
                useEffect(() => {
                    if (modal.visible) {
                        form.setFieldsValue(initValues)
                    } else {
                        form.resetFields()
                    }
                }, [modal.visible]);


                return (
                    <Modal
                        open={modal.visible}
                        title={hasValue(initValues) ? `编辑${title}` : `新增${title}`}
                        onOk={() => {
                            form.validateFields().then((values) => {
                                modal.resolve(values)
                                modal.hide()
                            })
                        }}
                        onCancel={modal.hide}
                        {
                            ...restProps
                        }
                    >
                        <Form
                            form={form}
                            layout={'vertical'}
                        >


                            {
                                idKey && <Form.Item name={idKey} label={idKey} hidden>
                                    <Input/>
                                </Form.Item>
                            }
                            <Component/>
                        </Form>

                    </Modal>
                )
            }
        )
    },

    show: async <T extends Record<any, any>>(Component: React.FC<any>, initValues?: T): Promise<FormModalResult<T>> => {
        return NiceModal.show<T, any, any>(Component, initValues).then((values) => {
            return {
                add: !values.id,
                update: !!values.id,
                values
            }
        })
    }
}