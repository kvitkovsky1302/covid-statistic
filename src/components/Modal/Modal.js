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
      country: { TotalConfirmed, TotalDeaths, TotalRecovered },
    } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <p>TotalConfirmed: {TotalConfirmed}</p>
          <p>TotalDeaths: {TotalDeaths}</p>
          <p>TotalRecovered: {TotalRecovered}</p>
          {/* <img src={this.props.bigImageUrl} alt="" /> */}
        </div>
      </div>
    );
  }
}

export default Modal;
