import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const TextField = (props) => {
  const { label, icon, ...otherProps } = props;

  return <div className="text-field-container">
    <label className="text-field-label">{label}</label>
    <div className="text-field-icon-container">
      <input className="text-field" {...otherProps} />
      <FontAwesomeIcon icon={['fas', icon]} color="black" />
    </div>
  </div>
}

export default TextField;