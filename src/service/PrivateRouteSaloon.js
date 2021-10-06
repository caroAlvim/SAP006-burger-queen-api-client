/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authUserSaloon } from './auth';

const PrivateRouteSaloon = (props) => authUserSaloon()
  ? <Route {...props} />
  : <Redirect to="/" />;

export default PrivateRouteSaloon;
