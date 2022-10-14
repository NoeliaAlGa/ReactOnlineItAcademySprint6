import './App.css';
import Escena from './components/escena/Escena';
import {textos} from './components/escena/Textos'
import Butons from './components/Butons';
function App() {
  return (
    <div className="App">
      <div>
        <Butons/>
        {textos.map(texto => {
           return <Escena textoEscena = {texto}>{texto}</Escena>})
        }
      </div>
    </div>
  );
}

export default App;
