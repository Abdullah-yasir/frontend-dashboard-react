import React from 'react';

import CornerBg from '../components/CornerBg';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

import logoIcon from '../assets/datalucent-logo-icon.png'


const Screen = (props) => {
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
            <div className="screen-content-footer">
              <div className="footer-line" />
              <img alt="logo-icon" className="footer-icon" src={logoIcon} />
            </div>
          </CornerBg>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Screen;