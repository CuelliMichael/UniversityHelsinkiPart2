import { useState, useEffect } from 'react';
import { PhonebookForm } from './Components/PhoebookForm';
import { Persons } from './Components/Persons';
import { FilterByName } from './Components/FilterByName';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [new_phone, setNewPhone] = useState({ name: '', number: '' });
  const [filter_by_name, setFilterByName] = useState('');

  useEffect(
    () => {
      loadPersons();
    },[]
  );

  const loadPersons = () => {
    axios.get("http://localhost:3001/persons")
    .then(
      result => {
        if(result){
          setPersons(result.data);
        }
      }
    )
    .catch(
      error => console.log('load persons', error)
    );
  }

  const handleChange = (value) => {
    setNewPhone(value);
  }

  const handleFilterChange = (value) => {
    setFilterByName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find(item => item.name === new_phone.name) === undefined) {
      setPersons([...persons, {...new_phone, id:persons.length}]);
      setNewPhone({ name: '', number: '' });
    } else {
      alert(`${new_phone.name} is already added to Phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterByName
        filter_by_name={filter_by_name}
        onFilterChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PhonebookForm
        new_phone={new_phone}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter_by_name={filter_by_name}
      />
    </div>
  )
}

export default App