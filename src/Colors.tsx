import Color from './Color.tsx'
import './Colors.css'

function Colors(props: {number: string}) {
    const colors: JSX.Element[] = Array.from({ length: parseInt(props.number) }, (_, index) => <Color key={index} />);
    return (
        <div className="colors-container">
            {colors}
        </div>
        )
}

export default Colors