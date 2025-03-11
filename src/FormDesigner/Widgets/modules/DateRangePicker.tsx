import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface DateRangeProps {
  schema: IWidgetSchema;
}

const DateRangePicker: React.FC<DateRangeProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntDatePicker.RangePicker  {...props} />
  );
};

export default DateRangePicker;