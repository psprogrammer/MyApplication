import React from 'react';
import classes from './App.css';
import DisplayFileContent from './components/DisplayFIleContent/DisplayFileContent';

function App() {
  return (
    <div className={classes.App}>
      <h1>Display File Content</h1>
      <DisplayFileContent />
    </div>
  );
}

export default App;
