import React from 'react';
import {Button, Upload as AntUpload, UploadProps as AntUploadProps} from 'antd';
import {IWidgetSchema} from "../../_Common/Types/IWidgetSchema.ts";
import Icon from "../../_Common/Components/Icon";
import classnames from "classnames";
interface UploadProps {
  schema: IWidgetSchema;
}

const Upload: React.FC<UploadProps> = ({ schema }) => {
  const props = (schema.props || {}) as AntUploadProps
  const { listType } = props
  const classNames = classnames(
      props.rootClassName,
      'upload-widget-container',
      `upload-widget-container__${listType}`,
  )
  return (
      <AntUpload {...props} className={classNames}>
        {
          listType === 'text' && <Button icon={<Icon name={'upload'}/>}>上传</Button>
        }
        {
          listType !== 'text' && <Icon name={'upload'}/>
        }

      </AntUpload>
  );
};

export default Upload;