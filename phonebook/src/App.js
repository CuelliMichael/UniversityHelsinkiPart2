import { useState, useEffect } from 'react';
import { PhonebookForm } from './Components/PhoebookForm';
import { Persons } from './Components/Persons';
import { FilterByName } from './Components/FilterByName';
import { PostData, GetAllData, DEFAULT_URL, PutData } from './RestCall';
import { ErrorNotification, SuccessNotification } from './Components/Notification/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [new_phone, setNewPhone] = useState({ name: '', number: '' });
  const [filter_by_name, setFilterByName] = useState('');
  const [message, setMessage] = useState(null);
  const [error_message, setErrorMessage] = useState(null);

  useEffect(
    () => {
      loadPersons();
    }, []
  );

  const loadPersons = () => {
    GetAllData(DEFAULT_URL+'persons',
      result => setPersons(result),
      (message,error) => alert(error)
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
    const find_person = persons.find(item => item.name === new_phone.name);
    if (find_person === undefined) {
      PostData(
        new_phone,
        DEFAULT_URL + "persons",
        () => {
          loadPersons();
          handleMessage(`${new_phone.name} Added to the phonebook`);
          setNewPhone({ name: '', number: '' });
        },
        (message, error) => handleErrorMessage(error.message)
      );
    } else if(window.confirm(`${find_person.name} is already added to the phonebook, replace the old number with the new one? `)){
      PutData(
        {...find_person,number: new_phone.number},
        `${DEFAULT_URL}persons/${find_person.id}`,
        ()=> {
          loadPersons();
          handleMessage(`${find_person.name} now has a new number`);
          setNewPhone({ name: '', number: '' });
        },
        (message,error) => handleErrorMessage(error.message)
      )
    }
  }

  const handleMessage = (message) => {
    setMessage(message);
    setTimeout(
      () => {
        setMessage(null);
      },5000
    )
  }

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(
      () => {
        setErrorMessage(null);
      },5000
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={message}/>
      <ErrorNotification message={error_message} />
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
        onReload={loadPersons}
      />
    </div>
  )
}

export default App