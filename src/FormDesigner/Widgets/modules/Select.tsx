import React from 'react';
import { Select as AntSelect } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface SelectProps {
  schema: IWidgetSchema;
}

const Select: React.FC<SelectProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntSelect {...props} />
  );
};

export default Select;