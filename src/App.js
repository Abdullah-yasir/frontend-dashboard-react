
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      <Modal visible={true} >
        this is conent
      </Modal>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

