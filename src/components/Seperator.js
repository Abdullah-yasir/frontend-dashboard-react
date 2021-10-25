import React from 'react';

const Seperator = (props) => {
  const { vertical } = props;
  const styles = vertical ? { height: 20 } : { width: 20 }
  return <div style={styles} />
}

export default Seperator