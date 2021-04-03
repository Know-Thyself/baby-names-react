import './App.css';
import babyNames from "./babyNamesData.json";
import BoysAndGirlsNames from './BoysAndGirlsNames';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="names-header">All About Awesome Baby Names!</h1>
        <BoysAndGirlsNames babyNames={babyNames}/>
      </header>
    </div>
  );
}

export default App;
