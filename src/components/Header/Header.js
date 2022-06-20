import { useState } from 'react';
import s from './Header.module.css';
import LogoImage from '../../images/logo.png';
import { ReactComponent as Magnifier } from '../../images/magnifier.svg';

function Header({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value);
    onSubmit(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery('');
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={LogoImage} alt="user avatar" className={s.logoImage} />
        <h1 className={s.statistic}>Statistic</h1>
      </div>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleSearchQuery}
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

export default Header;
