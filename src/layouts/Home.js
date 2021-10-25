import React from 'react';


import Footer from './Footer';
import Header from './Header';

const Home = (props) => {
  const { children } = props;
  return (
    <div className="screen">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Home;