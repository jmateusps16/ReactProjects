import './TextField.css'

const TextField = (props) => {

    const placeholderMod = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderMod}/>
        </div>
    )
}

export default TextField