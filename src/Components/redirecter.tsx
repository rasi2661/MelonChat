import React, { useState, useEffect, FC } from "react";
import { useHistory, useLocation, Route, Redirect } from "react-router-dom";
import { user } from "../Modules/auth";

interface Props {
    authed: any;
    path: string;
}

export const PrivateRoute: FC<Props> = ({ path, authed, children, ...props }) => (
  (<Route {...props} path={path} render={() => {
      return authed == undefined
        ? <Redirect to='/login' />
        : children
    }} />)
);

export const PublicRoute: FC<Props> = ({ path, authed, children, ...props }) => (
  (<Route {...props} path={path} render={() => {
      return authed == undefined
        ? children
        : <Redirect to='/' />
    }} />)
);
