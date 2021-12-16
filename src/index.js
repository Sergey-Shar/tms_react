import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Navigation from './navigation';
import UsersNames from './components/Names';
import   './firebase';

ReactDOM.render(
  <React.StrictMode>
   <UsersNames/>
  </React.StrictMode>,
  document.getElementById('root')
);


