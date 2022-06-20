import { Component } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import fetchAllCountries from './service/fetchAllCountries';
import CountriesList from './components/CounrtriesList';
import Modal from './components/Modal/Modal';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    countries: [],
    searchQuery: '',
    showModal: false,
    country: '',
    visibleCountries: [],
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // const page = this.state.page;
    // const searchQuery = this.state.searchQuery;
    this.fetchCountries();
  }

  async fetchCountries() {
    const { Countries } = await fetchAllCountries();
    const countries = Countries.map(
      ({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
        return { ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered };
      },
    );
    this.setState({
      countries,
      visibleCountries: countries,
    });
  }

  handleSearchQuery = value => {
    const filteredCountries = this.state.countries.filter(el => {
      return el.Country.toLowerCase().includes(value);
    });
    this.setState({ visibleCountries: filteredCountries });
  };

  toggleModal = countryName => {
    const country = this.state.countries.find(
      ({ Country }) => Country === countryName,
    );
    this.setState({
      showModal: !this.state.showModal,
      country,
    });
  };

  render() {
    return (
      <Container>
        <Header
          searchQuery={this.state.searchQuery}
          onSubmit={this.handleSearchQuery}
        />
        <CountriesList
          countries={this.state.visibleCountries}
          onOpenModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} country={this.state.country} />
        )}
      </Container>
    );
  }
}

export default App;
