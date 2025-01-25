import Color from './Color.tsx'
import './Colors.css'

function Colors(props: {number: string}) {
    const colors: JSX.Element[] = [];

    for (let i = 0; i < parseInt(props.number); i++) {
        colors[i] = <Color key={i} />;
    }
    
    return (
        <div className="colors-container">
            {colors}
        </div>
        )
}

export default Colors