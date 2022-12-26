import './Button.css'

const Button = (props) => {
    return (
        <button className='button-c'>
            {props.children}
        </button>
    )
}

export default Button