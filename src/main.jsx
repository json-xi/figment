import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import EventEmitter from 'eventemitter3';
window.__EE__ = new EventEmitter();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
