import React from 'react';

import CornerBg from '../components/CornerBg';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const { children } = props;
  return (
    <div className="screen">
      <Header />
      <div className="content">
        <aside className="content-left">
          <Sidebar />
        </aside>
        <main className="content-right">
          <CornerBg>
            {children}
          </CornerBg>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;