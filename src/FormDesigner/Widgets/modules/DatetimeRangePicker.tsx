import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface DatetimeRangePickerProps {
  schema: IWidgetSchema;
}

const DatetimeRangePicker: React.FC<DatetimeRangePickerProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntDatePicker.RangePicker  {...props} showTime/>
  );
};

export default DatetimeRangePicker;