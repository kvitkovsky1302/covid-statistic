import { Component } from 'react';
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

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {
      country: { Country, TotalConfirmed, TotalDeaths, TotalRecovered },
    } = this.props;
    console.log('Modal --> this.props', this.props);
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <h2 className={s.countryName}>{Country}</h2>
          <p className={s.countryData}>
            <span>TotalConfirmed:</span>
            <span>{TotalConfirmed}</span>
          </p>
          <p className={s.countryData}>
            <span>TotalDeaths:</span>
            <span> {TotalDeaths}</span>
          </p>
          <p className={s.countryData}>
            <span>TotalRecovered:</span>
            <span> {TotalRecovered}</span>
          </p>
          {/* <img src={this.props.bigImageUrl} alt="" /> */}
        </div>
      </div>
    );
  }
}

export default Modal;
