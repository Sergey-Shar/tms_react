import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Navigation from './navigation';
import Sauces from './components/Sauces';
import   './firebase';

ReactDOM.render(
  <React.StrictMode>
   <Sauces/>
  </React.StrictMode>,
  document.getElementById('root')
);


