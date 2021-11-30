import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './components/Text'



ReactDOM.render(
  <React.StrictMode>
    <Text text="Regular text" align="center" fontSize={1.5} />
    <Text text="Huge header" align="center" fontSize={2.5} />
    <Text text="Danger notification" align="center" fontSize={1.5} color="red" />
    <Text text="Underline text" align="center" fontSize={2} underLine />
  </React.StrictMode>,
  document.getElementById('root')
);


