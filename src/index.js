import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyAppf from './MyAppf';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import {Provider}  from 'react-redux';
import userReducer from './features/user';
import ResuxS from './ResuxS';
import RLogin from './RLogin';
import { createContext } from 'react';
import App from './App';
import About from './About';
// const store=configureStore({
//   reducer:{user:userReducer}
//  });
export const Appcontext=createContext({name:'selva',age:30});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App/>
  </React.StrictMode>
);

reportWebVitals();
