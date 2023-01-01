import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './FormField.css'

const FormField = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.toTheRegisteredEmployee({
            name,
            role,
            image,
            team
        })
        
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form-field'>
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    requiredC={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valueC={name}
                    toTheChange={valueC => setName(valueC)}

                />
                <TextField 
                    requiredC={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valueC={role}
                    toTheChange={valueC => setRole(valueC)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valueC={image}
                    toTheChange={valueC => setImage(valueC)}
                />
                <DropdownList 
                    requiredC={true} 
                    label="Times" 
                    itens={props.team} 
                    valueC={team}
                    toTheChange={teamValue => setTeam(teamValue)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormField