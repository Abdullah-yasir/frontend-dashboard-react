
import './App.css';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandHoldingUsd, faMedal, faCog, faHourglassEnd, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import Modal from './layouts/Modal';
import ModalRoutes from './routes/modal';


library.add(
  faHandHoldingUsd,
  faHourglassEnd,
  faMedal,
  faCog,
  faPlus,
  faTimes,
  faFacebook,
  faInstagram,
  faTwitter
);

function App() {
  return (
    <Provider store={store}>
      <div className="app-root">
        <Modal>
          <ModalRoutes />
        </Modal>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;

