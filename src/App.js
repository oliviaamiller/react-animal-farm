import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='Welcome to the Farm!'/>
      <Main animals={animals}/>
      <Footer email='cuteanimals@farm.org'/>

    </div>
  );
}

export default App;
