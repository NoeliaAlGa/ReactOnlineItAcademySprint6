import {textos} from './Textos'
import {Border} from '../styled'

export default function Escena(props) {
    return <div>
        {textos.map(props => {
            return <Border>{props}</Border>
    })}
    </div>
}
