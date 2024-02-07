import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
    return (
      <div className="App">
        <h1>App Componenr</h1>
        <User data={{name:"atul"}}/>
      </div>
    );
}

export default App;
