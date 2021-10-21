
import React from 'react';
import './App.css';
import Routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandHoldingUsd, faMedal, faCog, faHourglassEnd, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons';
import Modal from './layouts/Modal';
import { Provider, useSelector } from 'react-redux';
import store from './store';



library.add(faHandHoldingUsd, faHourglassEnd, faMedal, faCog, faPlus, faTimes);

function App() {
  return (
    <Provider store={store}>
      <div className="app-root">
        <Modal>
          this is conent
        </Modal>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;

