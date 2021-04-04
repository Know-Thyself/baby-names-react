import React from 'react';
import './App.css';
import babyNames from "./babyNamesData.json";
import BoysAndGirlsNames from './BoysAndGirlsNames';

function App() {
  return (
    <div key="App-container" className="App">
      <header key="App-header" className="App-header">
        <h2 key="main-header" className="names-header">All About Awesome Baby Names!</h2>
        <BoysAndGirlsNames babyNames={babyNames}/>
      </header>
    </div>
  );
}

export default App;
