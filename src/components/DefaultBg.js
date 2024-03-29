import React from 'react';
import bgLeft from '../assets/bg-left.svg';
import bgRight from '../assets/bg-right.svg';

const DefaultBg = (props) => {
  const { children } = props;
  return (
    <div className="default-bg">
      <img alt="bg left faded" src={bgLeft} className="bg-image-left" />
      <img alt="bg right faded" src={bgRight} className="bg-image-right" />
      <div className="bg-content">
        {children}
      </div>
    </div>
  );
}

export default DefaultBg;