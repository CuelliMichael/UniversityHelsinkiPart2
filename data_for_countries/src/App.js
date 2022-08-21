import { useState, useEffect } from 'react';
import { DEFAULT_URL, GetAllData } from './RestCall';
import { FilterCountries } from './Components/FindCountries';
import { ShowCountries } from './Components/ShowCountries';

function App() {

  const [countries, setCountries] = useState([]);
  const [search_countries, setSearchCountries] = useState("");

  useEffect(
    () => {
      loadCountries();
    }, []
  );

  const loadCountries = () => {
    GetAllData(
      DEFAULT_URL + '/v3.1/all',
      (result) => {
        const mapped_array = result.map(
          item => ({ common: item.name.common, official: item.name.official, flag: item.flag, capital: item.capital, area: item.area, languages: item.languages })
        )
        setCountries(mapped_array);
      },
      (message, error) => console.log(error)
    );
  }

  const handleSearchChange = (value) => {
    setSearchCountries(value);
  }




  return (
    <div>
      <FilterCountries
        search={search_countries}
        onChange={handleSearchChange}
      />
      <ShowCountries
        search={search_countries}
        countries={countries}
      />
    </div>
  );
}

export default App;
