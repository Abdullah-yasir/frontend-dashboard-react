import React from 'react';

const Scrollable = (props) => {
  const { children, scroll } = props;
  return (
    <div style={{ overflowY: scroll || 'auto' }}>
      {children}
    </div>
  )
}

export default Scrollable;