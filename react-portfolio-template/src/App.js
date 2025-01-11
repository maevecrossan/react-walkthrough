import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
