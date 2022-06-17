import { Component } from 'react';
// import { toast } from 'react-toastify';
import s from './Header.module.css';
// import SearchForm from '../SearchForm';
import LogoImage from './logo.png';

class Header extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    // if (this.state.searchQuery === '') {
    //   toast.error('Please, enter your request!');
    // }
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={s.Searchbar}>
        <img src={LogoImage} alt="user avatar" />
        <h1>Statistic</h1>
        {/* <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleSearchQuery}
          value={searchQuery}
        /> */}
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleSearchQuery}
            value={searchQuery}
            placeholder="Search..."
          />
        </form>
      </header>
    );
  }
}

export default Header;
