import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface DateProps {
  schema: IWidgetSchema;
}

const DatetimePicker: React.FC<DateProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntDatePicker  {...props} showTime/>
  );
};

export default DatetimePicker;