import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MyCV from './Components/MyCV';


function App() {
  return (
    <div className="App">

      <Header className="App-header" />

      <main>
        <MyCV/>
      </main>

      <Footer/>
      
    </div>
  );
}

export default App;
