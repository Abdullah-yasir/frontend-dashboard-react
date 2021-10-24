import React from 'react';

const TitleBar = (props) => {
  const { title } = props;
  return <div className="submenu-title">{title || 'Settings'}</div>
}

export default TitleBar;