import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Navigation from './navigation';
import   './firebase';
import TimePicker from './components/TimePicker';

ReactDOM.render(
  <React.StrictMode>
   <TimePicker/>
  </React.StrictMode>,
  document.getElementById('root')
);


