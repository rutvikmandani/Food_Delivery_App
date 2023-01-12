import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Store_Redux/Index';
import Days from './Days';
import GPrac from './Components/GParc';
import Setting from './Components/Setting';
// import App from './Components/demo'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_51LN8ceSGILDBv2b8YT5a4A0LNlvczGGGNDEj8AWsBrXGvEinvoDBJWu4ISC5YER2yr3YOyNiz4ajlvtPJBX40hN500ZUwuwqQW')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Elements stripe={stripePromise} >
          <App />
        </Elements>
      </Provider>

        {/* <Days /> */}
        {/* <GPrac /> */}
        {/* <Setting /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// firebase Rules
// {
//   "rules": {
//     ".read": "now < 1658946600000",  // 2022-7-28
//     ".write": "now < 1658946600000",  // 2022-7-28
//   }
// }
reportWebVitals();
