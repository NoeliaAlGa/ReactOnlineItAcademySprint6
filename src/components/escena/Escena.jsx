import {Border} from '../styled'
import {BackgroundPink} from '../styled'


export default function Escena(props) {
    return <div>
        {props.actiu === true
                ? <BackgroundPink>{props.textoEscena}</BackgroundPink>
                : <Border>{props.textoEscena}</Border> 
        }
    </div>
}

