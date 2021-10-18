import React from 'react';
import bgLeft from '../assets/bg-left.png';
import bgRight from '../assets/bg-right.png';

const DefaultBg = (props) => {
  const { children } = props;
  return (
    <div className="default-bg">
      <img alt="bg left faded" src={bgLeft} className="bg-image-left" />
      <img alt="bg right faded" src={bgRight} className="bg-image-right" />
      {children}
    </div>
  );
}

export default DefaultBg;