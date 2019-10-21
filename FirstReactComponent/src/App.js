import React, { Component } from 'react';
import './App.css';

const App = (props) => {   
    return (
    <div>
      <h1>Hello World</h1>
      <p>{props.greeting}</p>
    </div>
    ) 
}

export default App;
