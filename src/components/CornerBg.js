import React from 'react';

import bgBottomLeft from '../assets/dashboard-bg-left-bottom.svg';
import bgTopRight from '../assets/dashboard-bg-top-right.svg';


const CornerBg = (props) => {
  const { children, scrollable } = props;

  return (
    <div className="dashboard-bg">
      <img className="bg-top-right" src={bgTopRight} alt="bg" />
      <img className="bg-bottom-left" src={bgBottomLeft} alt="bg" />
      {scrollable ? (<div className="bg-overlay">{children}</div>) : children}
    </div>
  )
}

export default CornerBg;