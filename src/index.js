import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './api/UserList';
import reportWebVitals from './reportWebVitals';
import UserList from './api/UserList.js';
import Garage from './props-example.js';

ReactDOM.render(<UserList />, document.getElementById('root'));

ReactDOM.render(<Garage />, document.getElementById('root1'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
