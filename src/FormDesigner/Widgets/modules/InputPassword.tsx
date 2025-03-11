import React from 'react';
import { Input as AntInput } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface InputPasswordProps {
  schema: IWidgetSchema;
}

const InputPassword: React.FC<InputPasswordProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntInput.Password {...props} />
  );
};

export default InputPassword;