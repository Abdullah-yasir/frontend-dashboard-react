import React from 'react';

import ContentEndIndicator from '../components/ContentEndIndicator';
import Scrollable from '../components/Scrollable';

import Dashboard from './Dashboard';

const Screen = (props) => {
  const { children } = props;
  return (
    <Dashboard>
      {/* <Scrollable> */}
      {children}
      {/* < ContentEndIndicator /> */}
      {/* </Scrollable> */}
    </Dashboard>
  );
}

export default Screen;