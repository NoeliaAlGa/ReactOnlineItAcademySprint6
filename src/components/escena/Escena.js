import {Border} from '../styled'
import {BackgroundPink} from '../styled'
import {textos} from './Textos'

export default function Escena(props) {
    console.log(props);
    return <div>
        {props.textoEscena === textos[0]
                ? <BackgroundPink>{props.textoEscena}</BackgroundPink>
                : <Border>{props.textoEscena}</Border> 
        }
    </div>
}
