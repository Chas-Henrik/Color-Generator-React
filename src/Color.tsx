import './Color.css'
let id = 0;

function Color() {
    const color:string = '#' + String(Math.floor(16777216*Math.random()).toString(16)).padStart(6, '0');
    return (
        <div className='color' key={id++} style={{backgroundColor: color}}>{color}</div>
        )
}

export default Color