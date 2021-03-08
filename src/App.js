import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import side from "./side"
import calculator from "./calculator"

function App() {
  return (
    <div ClassName="App">
      <Route path="/" component={side} />
      <Route exact path="/calculator" component={calculator} />
    </div>
  );
}

export default App;
