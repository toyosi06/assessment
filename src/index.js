import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import MyRoutes from './routes /routes';


ReactDOM.render(
  <React.StrictMode> 
  <BrowserRouter basename={process.env.Public_URL}>
    <MyRoutes/> 
  </BrowserRouter>,
  </React.StrictMode>, 
  document.getElementById('root')
);


