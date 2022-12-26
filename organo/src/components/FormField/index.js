import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './FormField.css'

const FormField = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const whenSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='form-field'>
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField requiredC={true} label="Nome" placeholder="Digite seu nome" />
                <TextField requiredC={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList requiredC={true} label="Times" itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormField