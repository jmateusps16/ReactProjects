import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={event => props.toTheChange(event.target.value)} required={props.requiredC} value={props.valueC}>
                <option value=''>Selecione uma Opção</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList