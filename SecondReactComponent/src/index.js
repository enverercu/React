import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cars from './Cars';

ReactDOM.render(
      <div>
        <App id={Cars[0].id} name={Cars[0].name} />
        <App id={Cars[1].id} name={Cars[1].name} />
      </div>
  
  , document.getElementById('root'));
