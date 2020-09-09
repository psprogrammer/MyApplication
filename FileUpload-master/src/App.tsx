import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom';

import { uploadRoutes } from './upload';

const logo = require('./static/icon.png');

const App: React.SFC<{}> = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Flopbox</h2>
    </div>
    <p className="App-intro">
      Technically not Dropbox
    </p>
    <Switch>
      <Route exact={true} path="/">
        <Link to="upload">
          Sign In (not really)
        </Link>
      </Route>
      {uploadRoutes()}
    </Switch>
  </div>
);

export default App;
