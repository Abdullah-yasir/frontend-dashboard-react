import React from 'react';

const CardSharp = (props) => {
  const { children, style } = props;

  return <div className="card-sharp" style={style}>
    {children}
  </div>
}


export default CardSharp;