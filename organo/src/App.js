import { useState } from 'react';
import Banner from './components/Banner';
import FormField from './components/FormField';

function App() {

  const [employee, setEmployee] = useState([])

  const toTheNewRegisteredEmployee = (employee) => {
    console.log(employee)
    setEmployee([...employers, employee])
  }

  return (
    <div className="App">
      <Banner />
      <FormField toTheRegisteredEmployee={employee => toTheNewRegisteredEmployee(employee)}/>
    </div>
  );
}

export default App;
