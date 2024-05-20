import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Membros from './components/Membros';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header >
        <NavBar />
        <Carousel />
      </header>
      <main>
        <Sobre />
        <Servicos />
        <Membros />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
