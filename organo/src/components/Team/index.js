import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
    const cssSecondaryColor = {backgroundColor: props.secondaryColor}
    return (
        <section className='team' style={cssSecondaryColor}>
            <h3 style={{borderColor: props.primaryColor}}>
                {props.name}
            </h3>
            <div className='employers'>
                {props.employers.map(employee => <Employee 
                    name={employee.name}
                    role={employee.role}
                    image={employee.image}
                />)}
            </div>
        </section>
    )
}

export default Team