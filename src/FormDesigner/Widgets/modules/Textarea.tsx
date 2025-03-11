import React from 'react';
import { Input as AntInput } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface TextareaProps {
  schema: IWidgetSchema;
}

const Textarea: React.FC<TextareaProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntInput.TextArea {...props} />
  );
};

export default Textarea;