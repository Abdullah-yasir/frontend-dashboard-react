import React from 'react';

import CornerBg from '../components/CornerBg';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentEndIndicator from '../components/ContentEndIndicator';

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
          <CornerBg scrollable>
            {children}
            <ContentEndIndicator />
          </CornerBg>
        </main>
      </div>
      {/* <div className="footer-height-compensator" /> */}
      <Footer />
    </div>
  );
}

export default Screen;