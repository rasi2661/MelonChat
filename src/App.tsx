import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { user } from "./Modules/auth";

import { PublicRoute, PrivateRoute } from "./Components/redirecter";
import Client from "./Pages/Client"
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" authed={user.is}>
          <Login />
        </PublicRoute>
        <PublicRoute path="/register" authed={user.is}>
          <Register />
        </PublicRoute>
        <PrivateRoute path="/" authed={user.is}>
          <Client />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
