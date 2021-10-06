/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authUserKitchen } from './auth';

const PrivateRouteKitchen = (props) => authUserKitchen()
  ? <Route {...props} />
  : <Redirect to="/" />;

export default PrivateRouteKitchen;
