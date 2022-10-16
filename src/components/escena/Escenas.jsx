import Escena from "./Escena";
import {textos} from './Textos'
import {useRef} from 'react';

export default function Escenas(props) {
    const divEscena = useRef(null);

    return  <div ref={divEscena}>
    <Escena actiu = {true} textoEscena = {textos[0]}>{textos[0]}</Escena>
    <Escena actiu = {false} textoEscena = {textos[1]}>{textos[1]}</Escena>
    <Escena actiu = {false} textoEscena = {textos[2]}>{textos[2]}</Escena>
    <Escena actiu = {false} textoEscena = {textos[3]}>{textos[3]}</Escena>
    {/*{textos.map(texto => {
       return <Escena textoEscena = {texto}>{texto}</Escena>})
    }*/}
  </div>
}