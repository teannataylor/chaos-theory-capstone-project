import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/user';

ReactDOM.render(
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
,
  document.getElementById('root')
);

reportWebVitals();