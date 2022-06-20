import { Component } from 'react';
import { ReactComponent as Heartbeat } from './heartbeat.svg';
import { ReactComponent as Skull } from './skull.svg';
import { ReactComponent as Medical } from './medical.svg';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {
      country: { Country, TotalConfirmed, TotalDeaths, TotalRecovered },
    } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleCloseClick}>
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
          <button onClick={this.handleCloseClick} className={s.confirmButton}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
