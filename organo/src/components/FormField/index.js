import TextField from '../TextField'
import './FormField.css'

const FormField = () => {
    return (
        <section className='form-field'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default FormField