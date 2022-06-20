import s from './CountriesList.module.css';

function CountriesList({ countries, onOpenModal }) {
  return (
    <ol className={s.countriesList}>
      <li className={`${s.countryDataItem} ${s.tableHead}`}>
        <div className={s.countryContainer}>
          <p className={s.countryNumber}>№</p>
          <p className={s.countryName}>Country</p>
        </div>
        <p className={s.countryTotalConfirmed}>Total Confirmed</p>
      </li>
      {countries.map(({ ID, Country, TotalConfirmed }, index) => {
        return (
          <li
            className={s.countryDataItem}
            key={ID}
            onClick={e => {
              onOpenModal(e.currentTarget.firstChild.lastChild.innerText);
            }}
          >
            <div className={s.countryContainer}>
              <p className={s.countryNumber}>{index + 1}</p>
              <p className={s.countryName}>{Country}</p>
            </div>
            <p className={s.countryTotalConfirmed}>{TotalConfirmed}</p>
          </li>
        );
      })}
    </ol>
  );
}

export default CountriesList;
