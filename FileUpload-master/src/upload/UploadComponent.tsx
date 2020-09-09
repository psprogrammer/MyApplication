import * as React from 'react';

interface FormProps {
  filename: string;
}

export const UploadForm: React.SFC<FormProps> = props => (
  <h1>Hello {props.filename}</h1>
);
