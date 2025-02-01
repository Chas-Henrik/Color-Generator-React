import React, { useState } from 'react'
import './Color.css'
let id = 0;

function Color(props: {color: string}) {
    const [hasBorder, setHasBorder] = useState<boolean>(false);
    const toggleBorder = () => {
        setHasBorder(!hasBorder);
    }
    const styleObject = {
        backgroundColor: props.color,
        border: hasBorder ? '2px solid white' : 'none'
    }

    return (
        <div className='color' key={id++} onClick={toggleBorder} style={styleObject}>{props.color}</div>
        )
}

export default Color