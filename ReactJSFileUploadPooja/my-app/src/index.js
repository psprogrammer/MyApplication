import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileUpload from './Components/FileUploader';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <FileUpload />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
