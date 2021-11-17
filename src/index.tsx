import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAOA70nPoNH3Slbfb-e55vDayAr9wW--r8",
  authDomain: "dinithisamindanipriyashiroma.firebaseapp.com",
  projectId: "dinithisamindanipriyashiroma",
  storageBucket: "dinithisamindanipriyashiroma.appspot.com",
  messagingSenderId: "629538322852",
  appId: "1:629538322852:web:8ae68c72fa0a850bf22931",
  measurementId: "G-5ZDYH2N067"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
