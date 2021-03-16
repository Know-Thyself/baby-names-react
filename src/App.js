import './App.css';
import BoysNames from './BoysNames';
import babyNames from "./babyNamesData.json";
import GirlsNames from './GirlsNames';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>All about finding the best baby names</h1>
        <GirlsNames girlsNames={babyNames}/>
        <BoysNames boysNames={babyNames}/>
      </header>
    </div>
  );
}

export default App;
