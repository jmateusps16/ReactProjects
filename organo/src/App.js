import { useState } from 'react';
import Banner from './components/Banner';
import FormField from './components/FormField';
import Team from './components/Team';

function App() {

  const team =[
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const [employers, setEmployers] = useState([])

  const toTheNewRegisteredEmployee = (employee) => {
    console.log(employee)
    setEmployers([...employers, employee])
  }

  return (
    <div className="App">
      <Banner />
      <FormField team={team.map(team => team.name)} toTheRegisteredEmployee={employee => toTheNewRegisteredEmployee(employee)}/>
      {team.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employers={employers.filter(employee => employee.team === team.name)}
      />)}
    </div>
  );
}

export default App;
