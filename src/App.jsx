import React from "react";
import "./App.css";
import Escena from "./components/escena/Escena";
import Cabecera from "./components/cabecera"
import { textos } from "./components/escena/Textos";
import { Buttons } from "./components/styled";
import { useState, useEffect } from "react";



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

  useEffect(() => {
    pantallaBenvinguda 
      ? document.body.style = 'background-image: none)'
      : document.body.style = `background-image: url(./img/${currentActive}.jpg)`;
  });
  

  return (
    <div className="App">
      {pantallaBenvinguda
        ?<div>
          <Cabecera/>
          <Buttons onClick={iniciar}>Començar</Buttons>
        </div>
        :<body style = {{backgroundImage: `url(./img/${currentActive}.jpg)`}}>
          <div>
            <div>
              <Buttons onClick={back}>Anterior</Buttons>
              <Buttons onClick={next}>Següent</Buttons>
            </div>
            <div>
              {textos.map((texto, indice) => {
                const esActiu = indice === currentActive;
                return <Escena key={indice} actiu={esActiu} textoEscena={texto.txt} />;
              })}
            </div>
          </div>
        </body>
      }
    </div>
  )
}

export default App;
