import Color from './Color.tsx'
import './Colors.css'

function Colors(props: {number: number}) {
    const colors: JSX.Element[] = Array.from({ length: props.number }, (_, index) => <Color key={index} />);
    return (
        <div className="colors-container">
            {colors.map((color:JSX.Element) => color)}
        </div>
        )
}

export default Colors