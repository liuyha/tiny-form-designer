import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface CheckboxProps {
  schema: IWidgetSchema;
}

const Checkbox: React.FC<CheckboxProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntCheckbox.Group {...props} />
  );
};

export default Checkbox;