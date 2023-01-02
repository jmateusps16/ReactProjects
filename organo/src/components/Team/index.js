import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
    const cssSecondaryColor = {backgroundColor: props.secondaryColor}
    
    return (
        //também poderia ter feito com o && não sendo necessário utilizar o :'' ao final
        //props.employers.length > 0 &&
        props.employers.length > 0 ?
        <section className='team' style={cssSecondaryColor}>
            <h3 style={{borderColor: props.primaryColor}}>
                {props.name}
            </h3>
            <div className='employers'>
                {props.employers.map(employee => <Employee 
                    key={employee.name}
                    name={employee.name}
                    role={employee.role}
                    image={employee.image}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Team