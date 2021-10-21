import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  const { label, icon, ...otherProps } = props;
  return (
    <button className="button" {...otherProps}>
      {icon ? (
        <FontAwesomeIcon className="button-icon" icon={['fas', icon]} />
      ) : null}
      <span className="button-label">{label}</span>
    </button>
  );
}

export default Button;