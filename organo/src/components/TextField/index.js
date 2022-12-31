import './TextField.css'

const TextField = (props) => {

    const placeholderMod = `${props.placeholder}...`

    const whenTyping = (event) => {
        props.toTheChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.valueC} onChange={whenTyping} required={props.requiredC} placeholder={placeholderMod}/>
        </div>
    )
}

export default TextField