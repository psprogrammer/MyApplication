import FileUpload from '@mtfe/react-fileupload';
import React from 'react';
import ReactDOM from 'react-dom';

require('@mtfe/react-fileupload/assets/index.css');

export default class Page extends React.Component {

  render() {
    var req = {
      url: 'http://10.4.234.184:8230/file/upload'
    }
    return (
      <div>
        <div>
          <a style={{position: 'relative', color: 'red', textDecoration: 'underline'}}>
            点击上传
            <FileUpload req={req}/>
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('__component-content'));
