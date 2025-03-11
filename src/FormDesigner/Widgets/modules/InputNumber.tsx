import React from 'react';
import { InputNumber as AntInputNumber } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface InputNumberProps {
  schema: IWidgetSchema;
}

const InputNumber: React.FC<InputNumberProps> = ({ schema }) => {
  const { props } = schema;
  return (

      <AntInputNumber {...props} style={{width: '100%'}}/>
  );
};

export default InputNumber;