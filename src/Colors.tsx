import Color from './Color.tsx'
import './Colors.css'

function Colors(props: {number: string}) {
    const colors: JSX.Element[] = [];

    for (let i = 0; i < parseInt(props.number); i++) {
        const color:string = '#' + String(Math.floor(16777216*Math.random()).toString(16)).padStart(6, '0');
        colors[i] = <Color key={i} color={color}/>;
    }

    return (
        <div className="colors-container">
            {colors}
        </div>
        )
}

export default Colors