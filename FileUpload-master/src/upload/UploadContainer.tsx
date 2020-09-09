import * as React from 'react';
import { Link } from 'react-router-dom';

import { UploadForm } from './UploadComponent';

interface FormProps {}

export class UploadPage extends React.Component<FormProps, {}> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <UploadForm filename="stupid face" />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
