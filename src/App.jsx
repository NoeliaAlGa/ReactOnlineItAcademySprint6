import "./App.css";
import Escena from "./components/escena/Escena";
import Cabecera from "./components/cabecera"
import { textos } from "./components/escena/Textos";
import { Buttons } from "./components/styled";
import { useState } from "react";

function App() {
  const [currentActive, setCurrentActive] = useState(0);
  const [pantallaBenvinguda, setpantallaBenvinguda] = useState(true);

  const iniciar = () => {
    setpantallaBenvinguda(false);
  };

  const back = () => {
    if (currentActive > 0 && currentActive < textos.length) {
      setCurrentActive(currentActive - 1);
    }
  };

  const next = () => {
    if (currentActive >= 0 && currentActive < textos.length - 1) {
      setCurrentActive(currentActive + 1);
    }
  };

  return (
    <div className="App">
      {pantallaBenvinguda
        ?<div>
          <Cabecera/>
          <Buttons onClick={iniciar}>Començar</Buttons>
        </div>
        :<div>
          <div>
            <Buttons onClick={back}>Anterior</Buttons>
            <Buttons onClick={next}>Següent</Buttons>
          </div>
          <div>
            {textos.map((texto, indice) => {
              const esActiu = indice === currentActive;
              return <Escena key={indice} actiu={esActiu} textoEscena={texto} />;
            })}
          </div>
      </div>
      }
   
    </div>
  );
}

export default App;
