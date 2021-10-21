
import React from 'react';
import './App.css';
import Routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandHoldingUsd, faMedal, faCog, faHourglassEnd, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons';
import Modal from './layouts/Modal';


library.add(faHandHoldingUsd, faHourglassEnd, faMedal, faCog, faPlus, faTimes);

function App() {
  return (
    <div className="app-root">
      <Modal visible={false} >
        this is conent
      </Modal>
      <Routes />
    </div>
  );
}

export default App;

