import './Color.css'
let id = 0;

function Color(props: {color: string}) {
    return (
        <div className='color' key={id++} style={{backgroundColor: props.color}}>{props.color}</div>
        )
}

export default Color