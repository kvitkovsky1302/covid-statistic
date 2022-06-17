// import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './CountriesList.module.css';

function CountriesList(props) {
  const { countries, onOpenModal } = props;

  return (
    <ol className={s.ImageGallery}>
      {countries.map(({ ID, Country, TotalConfirmed }) => {
        return (
          // <ImageGalleryItem
          //   key={id}
          //   webformatURL={webformatURL}
          //   largeImageURL={largeImageURL}
          //   onOpenModal={onOpenModal}
          // />
          <li
            className={s.ImageGalleryItem}
            key={ID}
            onClick={e => {
              onOpenModal(e.target.innerText);
            }}
          >
            <p>{Country}</p>
            <p>{TotalConfirmed}</p>
            {/* <img
              onClick={e => {
                onOpenModal(e.target.dataset.large);
              }}
              src={webformatURL}
              alt=""
              className={s.ImageGalleryItemImage}
              data-large={largeImageURL}
            /> */}
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
