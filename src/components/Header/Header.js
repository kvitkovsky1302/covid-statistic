import { Component } from 'react';
// import { toast } from 'react-toastify';
import s from './Header.module.css';
// import SearchForm from '../SearchForm';
import LogoImage from './logo.png';
import { ReactComponent as Magnifier } from './magnifier.svg';

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
      <header className={s.header}>
        <div className={s.logo}>
          <img src={LogoImage} alt="user avatar" className={s.logoImage} />
          <h1 className={s.statistic}>Statistic</h1>
        </div>
        {/* <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleSearchQuery}
          value={searchQuery}
        /> */}
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleSearchQuery}
            value={searchQuery}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Search..."
          />
          <button type="submit" className={s.searchFormButton}>
            <Magnifier className={s.magnifier} />
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
