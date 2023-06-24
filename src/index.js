import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyAppf from './MyAppf';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import {Provider}  from 'react-redux';
import userReducer from './features/user';
import ResuxS from './ResuxS';
import Login from './Login';
const store=configureStore({
  reducer:{user:userReducer}
 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <MyAppf/>
    <ResuxS/>
    <Login/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
