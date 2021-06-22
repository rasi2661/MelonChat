import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { user } from "./Modules/auth";

import Client from "./Pages/Client"
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => {
          return user.is == undefined
            ? <Login />
            : <Redirect to='/' />
        }} />
        <Route path="/register" render={() => {
            return user.is == undefined
              ? <Register />
              : <Redirect to='/' />
          }} />
        <Route path="/" render={() => {
            return user.is == undefined
              ? <Redirect to='/login' />
              : <Client />
          }} />
      </Switch>
    </Router>
  );
}

export default App;
