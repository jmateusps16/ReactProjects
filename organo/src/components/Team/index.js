import './Team.css'

const Team = (props) => {
    const cssSecondaryColor = {backgroundColor: props.secondaryColor}
    return (
        <section className='team' style={cssSecondaryColor}>
            <h3 style={{borderColor: props.primaryColor}}>
                {props.name}
            </h3>
        </section>
    )
}

export default Team