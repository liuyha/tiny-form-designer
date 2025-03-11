import React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface DateProps {
  schema: IWidgetSchema;
}

const TimePicker: React.FC<DateProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntTimePicker  {...props} />
  );
};

export default TimePicker;