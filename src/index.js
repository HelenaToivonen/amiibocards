import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyAJd3lgjuUIlVDaxhOzPO6VDYyuL_QOhXQ",
  authDomain: "ac-amiibo-cards.firebaseapp.com",
  projectId: "ac-amiibo-cards",
  storageBucket: "ac-amiibo-cards.appspot.com",
  messagingSenderId: "961274583261",
  appId: "1:961274583261:web:8e3ce3c32501c820e42334",
  measurementId: "G-Y9FZ1Y5RLS"
};
 
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthCheck fallback={<Startup />}>
      <App />
      </AuthCheck>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
