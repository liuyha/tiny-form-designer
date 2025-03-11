import React from 'react';
import { Input as AntInput } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface InputProps {
  schema: IWidgetSchema;
}

const Input: React.FC<InputProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntInput {...props} />
  );
};

export default Input;