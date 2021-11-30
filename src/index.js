import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './components/Boxes'



ReactDOM.render(
  <React.StrictMode>
    <Square cssClass = 'small-square' label = 'BIG square'/>
    <Square cssClass = 'middle-square' label = 'A less square'/>
    <Square cssClass = 'large-square' label = 'The smallest square'/>
  </React.StrictMode>,
  document.getElementById('root')
);


