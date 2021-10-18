import React from 'react';

const IconButton = (props) => {
  const { label, style, image, labelStyle } = props;
  return (
    <div className="icon-button" style={style}>
      <img alt="button icon" src={image} className="icon-button-image" />
      <div className="icon-button-label" style={labelStyle}>
        {label}
      </div>
    </div>
  );
}

export default IconButton;