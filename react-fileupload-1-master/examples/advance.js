import FileUpload from '@mtfe/react-fileupload';
import React from 'react';
import ReactDOM from 'react-dom';

require('@mtfe/react-fileupload/assets/index.css');

export default class Page extends React.Component {

  constructor() {
    super();
    this.state = {
      uploadImg: '',
      percentage: 0,
      clipboardData: null,
      dropNode: null
    }
    this.onPaste = this.onPaste.bind(this);
  }

  componentDidMount() {
    this.setState({dropNode: this.refs.dropNode})
  }

  onPaste(e) {
    this.setState({clipboardData: e.clipboardData})
  }

  render() {

    var req = {
      url: 'http://10.4.234.184:8230/file/upload'
    };

    var events = {
      overUploadLimit: function() {
        console.warn('文件总上传数量超过限制!');
      },
      overWaitLimit: function() {
        console.warn('文件等待上传数量超过限制！');
      },
      overSizeLimit: function() {
        console.warn('图片或文件大小不能超过2M，请重新选择后再上传！');
      },
      notAllow: function() {
        console.warn('文件类型不允许上传！');
      },
      afterChecked: function() {
        console.log('完成文件检查!');
      },
      start: () => {
        this.setState({percentage: 0, uploadImg: ''});
        console.log('文件开始上传!');
      },
      progress: (loaded, total, percentage, file) => {
        console.log('上传', percentage, '%');
        this.setState({percentage: percentage})
      },
      success: (res) => {
        console.log('文件上传成功!');
        this.setState({uploadImg: res.data.thumbnail})
      },
      error: function(e, file) {
        console.error(e);
        console.error({text: '文件 ' + file.name + ' 上传失败!', type: 'error'});
      },
      timeout: function(e, file) {
        console.error(e);
        console.error({text: '文件 ' + file.name + ' 上传超时!', type: 'error'});
      },
      finish: function(succList, failList) {
        console.log('完成所有文件上传, 其中成功: ' + succList.length + ', 失败: ' + failList.length);
      }
    }

    var progressBarStyle = {width: (this.state.percentage || 0) + '%', height: 10, backgroundColor: 'green', transition: 'width .6s ease'};

    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '400'}}>
          <div>
            <a style={{position: 'relative', color: 'red', textDecoration: 'underline'}}>
              点击上传
              <FileUpload
                req={req}
                filename={file => file.name || Date.now()}
                accept="image/jpg, image/png"
                maxSize="2MB"
                maxFiles={5}
                clipboardData={this.state.clipboardData}
                dropNode={this.state.dropNode}
                resultChecker={result => result.code == 200}
                events={events}
              />
            </a>
          </div>
          <p>
            <input type="text" className="input" placeholder="支持从剪贴板粘贴上传, 默认将文件名设置为Date.now()" onPaste={this.onPaste} style={{width: 300}} />
          </p>
          <textarea ref="dropNode" className="textarea" placeholder="支持拖拽到此处上传" style={{width: 300}} />
        </div>
        <div style={{width: 200}}>
          <img src={this.state.uploadImg} style={{width: 200, height: 200}}/>
          <div style={progressBarStyle}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('__component-content'));
