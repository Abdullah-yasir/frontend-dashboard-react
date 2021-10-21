import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logoImage from '../assets/datalucent-logo-icon.png';
import Card from '../components/Card';

const Modal = (props) => {
  const { logo, children, visible } = props;

  return (
    <section className="modal" style={{ display: visible ? 'flex' : 'none' }}>
      <Card headerComponent={() => {
        if (!logo) return null;
        return (
          <div className="modal-logo-top">
            <div className="modal-logo">
              <img src={logoImage} alt="modal-logo" className="modal-logo-img" />
            </div>
          </div>
        )
      }}>
        <div className="modal-body">
          <FontAwesomeIcon icon={['fas', 'times']} className="modal-close" />
          {children}
        </div>
      </Card>
    </section>
  );
}

export default Modal;