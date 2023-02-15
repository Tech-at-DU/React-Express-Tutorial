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

      {/* Challenge: After testing the components above make your own component. 
      See the challenges in express-server/server.js. You'll make your own route 
      that serves your own json data. 
      Create a component in this project that display that data. */}

      <PublicSpaces />
    </div>
  );
}

export default App;
