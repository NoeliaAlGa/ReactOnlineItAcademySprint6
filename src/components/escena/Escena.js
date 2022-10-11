import {textos} from './Textos'

export default function Escena(props) {
    return <ul>
    {textos.map(props => {
        return <p>{props}</p>
    })}
    </ul>
}
