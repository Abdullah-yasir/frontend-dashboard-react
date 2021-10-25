import React from 'react';

import CornerBg from '../components/CornerBg';

import Home from './Home';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const { children } = props;
  return (
    <Home>
      <aside className="content-left">
        <Sidebar />
      </aside>
      <main className="content-right">
        <CornerBg>
          {children}
        </CornerBg>
      </main>
    </Home>
  );
}

export default Dashboard;