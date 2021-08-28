import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}
