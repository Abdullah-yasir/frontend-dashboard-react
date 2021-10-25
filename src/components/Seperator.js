import React from 'react';

const Seperator = (props) => {
  const { vertical, space = 20 } = props;
  const styles = vertical ? { height: space } : { width: space }
  return <div style={styles} />
}

export default Seperator