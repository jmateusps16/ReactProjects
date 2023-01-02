import './Employee.css'

const Employee = ({name, role, image, cBackgroudColor}) => {
    return (
        <div className='employee'>
            <div className='empHeader' style={{backgroundColor: cBackgroudColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='empFooter'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Employee