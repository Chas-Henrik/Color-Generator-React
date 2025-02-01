import { useState } from 'react'
import Color from './Color.tsx'
import './Colors.css'

function Colors(props: {number: string}) {
    const colors: JSX.Element[] = [];
    const [hasColorMap, setColorMap] = useState<boolean>(false);
    const buttonText = hasColorMap ? 'Remove Colormap' : 'Generate Colormap';

    if(hasColorMap) {
        for (let i = 0; i < parseInt(props.number); i++) {
            const color:string = '#' + String(Math.floor(16777216*Math.random()).toString(16)).padStart(6, '0');
            colors.push(<Color key={i} color={color}/>);
        }
    }

    return (
        <>
            <button className="colors-button" onClick={() => setColorMap(!hasColorMap)}>{buttonText}</button>
            <div className="colors-container">
                {colors}
            </div>
        </>
    )
}

export default Colors