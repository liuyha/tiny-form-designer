import React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface TimeRangePickerProps {
  schema: IWidgetSchema;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntTimePicker.RangePicker  {...props} />
  );
};

export default TimeRangePicker;