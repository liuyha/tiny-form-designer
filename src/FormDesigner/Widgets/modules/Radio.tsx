import React from 'react';
import { Radio as AntRadio} from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";

interface RadioProps {
  schema: IWidgetSchema;
}

const Radio: React.FC<RadioProps> = ({ schema }) => {
  const { props } = schema;
  return (
      <AntRadio.Group {...props} />
  );
};

export default Radio;