// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';


library.add(faHandHoldingUsd)

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;

