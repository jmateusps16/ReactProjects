import { useState } from 'react';
import Banner from './components/Banner';
import FormField from './components/FormField';
import Team from './components/Team';

function App() {

  const [employers, setEmployers] = useState([])

  const toTheNewRegisteredEmployee = (employee) => {
    console.log(employee)
    setEmployers([...employers, employee])
  }

  return (
    <div className="App">
      <Banner />
      <FormField toTheRegisteredEmployee={employee => toTheNewRegisteredEmployee(employee)}/>
      <Team name={"Teste"}/>
    </div>
  );
}

export default App;
