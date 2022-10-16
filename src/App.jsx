import './App.css';
import Escena from './components/escena/Escena';
import {textos} from './components/escena/Textos'
/*import Butons from './components/Butons';*/
import {Buttons} from './components/styled';
import {useState} from 'react';

function App() {
  const [currentActive, setCurrentActive] = useState(0);

  const back = () => {
    if(currentActive > 0 && currentActive < textos.length) {
      setCurrentActive(currentActive - 1);
    }
    console.log('indice back:', currentActive);
  }
  
  const next = () => {
      if(currentActive >= 0 && currentActive < textos.length) {
        setCurrentActive(currentActive + 1);
      }
      console.log('indice next:', currentActive);
  }

  return (
    <div className="App">
        <div>
            <Buttons onClick={back}>Anterior</Buttons>
            <Buttons onClick={next}>Següent</Buttons>
        </div>
        <div>
          {textos.map((texto, indice) => {
            const esActiu = indice === currentActive;
            return <Escena key = {indice}  actiu = {esActiu} textoEscena = {texto}/>
          })}
        </div>
    </div>
  );
}

export default App;
