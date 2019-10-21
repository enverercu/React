import React, { Component } from 'react';
import './App.css';

const App = (props) => {
    
    const {id,name} = props;

    return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
    ) 
}

export default App;
