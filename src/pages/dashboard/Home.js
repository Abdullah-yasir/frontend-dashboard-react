import React from 'react';
import Header from '../../layouts/Header';

import bgBottomLeft from '../../assets/dashboard-bg-left-bottom.svg';
import bgTopRight from '../../assets/dashboard-bg-top-right.svg';

const Home = (props) => {
  return (
    <div className="screen">
      <Header />
      <div className="content">
        <div className="content-left"></div>
        <div className="content-right">
          <main>
            <div className="dashboard-bg">
              <img className="bg-top-right" src={bgTopRight} alt="bg" />
              <img className="bg-bottom-left" src={bgBottomLeft} alt="bg" />
            </div>
          </main>
        </div>
      </div>

    </div>
  )
}

export default Home;