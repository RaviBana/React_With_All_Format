import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import FormElement from './FormElements';
// import Container from './Currency/Container'
// import { Router } from 'react-router-dom';
import AppRoute from './Router/AppRouter';
// import Layout from './Layout';
// import Container from './Currency/Container';
import store from './store';
import { Provider } from 'react-redux';
import { UserContextProvider } from './Context/UserContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
      <AppRoute />
    </UserContextProvider>
    </Provider>
  </React.StrictMode>,
document.getElementById("root")

);

reportWebVitals();
