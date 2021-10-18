import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const TextField = (props) => {
  const { label, icon, ...otherProps } = props;

  return <div className="text-field-container">
    <label className="text-field-label">{label}</label>
    <div className="text-field-icon-container">
      <FontAwesomeIcon icon="user" />
      <input className="text-field" {...otherProps} />
      <FontAwesomeIcon name="user" color="black" />
    </div>
  </div>
}

export default TextField;