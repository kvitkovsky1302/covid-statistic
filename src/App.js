import { useState, useEffect } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import fetchAllCountries from './service/fetchAllCountries';
import CountriesList from './components/CounrtriesList';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState('');
  const [visibleCountries, setVisibleCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const { Countries } = await fetchAllCountries();
    const countries = Countries.map(
      ({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
        return { ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered };
      },
    );
    setCountries(countries);
    setVisibleCountries(countries);
  }

  const handleSearchQuery = value => {
    const filteredCountries = countries.filter(el => {
      return el.Country.toLowerCase().includes(value);
    });
    setVisibleCountries(filteredCountries);
  };

  const toggleModal = countryName => {
    const country = countries.find(({ Country }) => Country === countryName);
    setShowModal(!showModal);
    setCountry(country);
  };

  return (
    <Container>
      <Header onSubmit={handleSearchQuery} />
      <CountriesList countries={visibleCountries} onOpenModal={toggleModal} />
      {showModal && <Modal onClose={toggleModal} country={country} />}
    </Container>
  );
}

export default App;
