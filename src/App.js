
import './App.css';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandHoldingUsd, faMedal, faCog, faHourglassEnd, faPlus, faTimes, faUser, faLock
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
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
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faUser,
  faLock
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

