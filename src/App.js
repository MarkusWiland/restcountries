import { useState, useEffect } from 'react';
import Country from './Country.js';
import './App.css';
import axios from 'axios';
function App() {
  useEffect(() => {
    async function getCountries() {
      const countries = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(countries.data);
    }
    getCountries();
  }, []);
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState([]);
  const handleCountryChange = (name) => {
    async function getCountries() {
      const country = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      setSingleCountry(country.data);
    }
    getCountries();
  };
  console.log(singleCountry);
  return (
    <div className="app">
      <div className="container">
        <select
          className="app-select"
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        {singleCountry &&
          singleCountry.map((country) => (
            <>
              <Country key={country.name} country={country} />
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
