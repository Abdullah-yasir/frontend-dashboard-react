import React from 'react';

const Card = (props) => {
  const { headerComponent, footerComponent, children, className } = props;
  return <div className={`card ${className}`}>
    <div className="card-header">
      {headerComponent && headerComponent()}
    </div>
    <div className="card-body">{children}</div>
    <div className="card-footer">
      {footerComponent && footerComponent()}
    </div>
  </div>
}

export default Card;