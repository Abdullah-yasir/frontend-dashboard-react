import React from 'react';
import logoIcon from '../../src/assets/datalucent-logo-icon.png'

const ContentEndIndicator = (props) => {
  const { visible, children } = props;
  if (visible === false) return null;

  return (
    <div className="content-footer-container" >
      {children}
      <div className="screen-content-footer">
        <div className="footer-line" />
        <img alt="logo-icon" className="footer-icon" src={logoIcon} />
      </div>
    </div>
  )
}

export default ContentEndIndicator;