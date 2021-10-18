import React from 'react';


const OrSeperator = (props) => {
  const { style } = props;

  return (
    <div className="or-container" style={style}>
      <div className="or-line"></div>
      <div className="or-text-container">
        <p className="or-text">or</p>
      </div>
      <div className="or-line"></div>
    </div>
  );
}

export default OrSeperator;