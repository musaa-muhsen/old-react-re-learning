import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// how to start the db.json - npx json-server --watch data/db.json --port 3005 
// A parameter is a limit. route parameters numbers for example are kind of like variable but inside the route 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


