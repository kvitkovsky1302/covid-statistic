// import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './CountriesList.module.css';

function CountriesList(props) {
  const { countries, onOpenModal } = props;

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
          // <ImageGalleryItem
          //   key={id}
          //   webformatURL={webformatURL}
          //   largeImageURL={largeImageURL}
          //   onOpenModal={onOpenModal}
          // />
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

// CountriesList.propTypes = {
//   imagePage: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onOpenModal: PropTypes.func.isRequired,
// };

export default CountriesList;
