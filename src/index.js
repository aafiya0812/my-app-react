import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserList from './api/UserList.js';
import AddUser from './api/AddUser.js';

ReactDOM.render(<UserList />, document.getElementById('root'));

ReactDOM.render(<AddUser />, document.getElementById('add-user'));

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
