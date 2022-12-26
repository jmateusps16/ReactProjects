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

    return (
        <section className='form-field'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Times" itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormField