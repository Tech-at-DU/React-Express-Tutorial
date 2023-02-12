import './App.css';
import SimpleFetch from './SimpleFetch';
import PublicSpaces from './PublicSpaces';

function App() {

  return (
    <div className="App">
      <h1>React Client</h1>
      
      {/* Use fetch to pull data in from an endpoint */}
      {/* <SimpleFetch /> */}

      {/* Fetch the SFPOPOS Data */}

      {/* Create a new  */}
      <PublicSpaces />
    </div>
  );
}

export default App;
