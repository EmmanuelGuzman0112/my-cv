import './App.css';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

      <Header className="App-header" />

      <main>
        <Presentation/>
      </main>

      <Footer/>
      
    </div>
  );
}

export default App;
