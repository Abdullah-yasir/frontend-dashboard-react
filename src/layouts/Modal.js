import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoImage from '../assets/datalucent-logo-icon.png';
import Card from '../components/Card';
import { showModal } from '../store/actions';

const Modal = (props) => {
  const { logo, children } = props;
  const dispatch = useDispatch();
  // const { visible } = useSelector(state => state.Modal);
  const visible = window.location.href.includes('/add-social-media')

  return (
    <section className="modal" style={{ display: visible ? 'flex' : 'none' }}>
      <Card>
        <div className="modal-body">
          <FontAwesomeIcon
            icon={['fas', 'times']}
            className="modal-close"
            onClick={() => {
              // dispatch(showModal(false))
              window.location.href = '/dashboard/offers';
            }}
          />
          <div className="modal-logo-top">
            <div className="modal-logo">
              <img src={logoImage} alt="modal-logo" className="modal-logo-img" />
            </div>
          </div>
          {children}
        </div>
      </Card>

    </section>
  );
}

export default Modal;