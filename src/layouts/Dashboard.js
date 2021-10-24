import React from 'react';
import { Route, Switch } from 'react-router';

import CornerBg from '../components/CornerBg';
import Offers from '../pages/dashboard/Offers';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const { children, match } = props;
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