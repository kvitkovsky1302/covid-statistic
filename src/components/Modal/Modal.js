import { useEffect } from 'react';
import { ReactComponent as Heartbeat } from '../../images/heartbeat.svg';
import { ReactComponent as Skull } from '../../images/skull.svg';
import { ReactComponent as Medical } from '../../images/medical.svg';
import s from './Modal.module.css';

function Modal({ onClose, country }) {
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleCloseClick}>
      <div className={s.modal}>
        <h2 className={s.countryName}>{Country}</h2>
        <div className={s.countryAllData}>
          <p className={s.countryData}>
            <span className={s.totalConfirmed}>
              <Heartbeat className={s.iconHeartbeat} />
              TotalConfirmed
            </span>
            <span>{TotalConfirmed}</span>
          </p>
          <p className={s.countryData}>
            <span className={s.totalDeaths}>
              <Skull className={s.iconScull} />
              TotalDeaths
            </span>
            <span> {TotalDeaths}</span>
          </p>
          <p className={s.countryData}>
            <span className={s.totalRecovered}>
              <Medical className={s.iconMedical} />
              TotalRecovered
            </span>
            <span> {TotalRecovered}</span>
          </p>
        </div>
        <button onClick={handleCloseClick} className={s.confirmButton}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
