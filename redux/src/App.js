import React from 'react';
import './App.css';
import User from './User';
import HomeContainer  from './Containers/HomeContainer';

function App() {
    return (
      <div className="App">
            <h1>App Componenr</h1>
            <HomeContainer />
        <User data={{name:"atul"}}/>
      </div>
    );
}

export default App;
