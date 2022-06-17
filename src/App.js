import { Component } from 'react';
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
    });
  }

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
      <>
        <Header />
        <CountriesList
          countries={this.state.countries}
          onOpenModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} country={this.state.country} />
        )}
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
