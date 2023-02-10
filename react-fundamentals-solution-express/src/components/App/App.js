import { Outlet } from 'react-router-dom'

import './App.css';
import Title from '../Title';
import Footer from '../Footer/';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

const styles = {
  backgroundColor: 'green', // backgroundColor
  height: '100%'
}