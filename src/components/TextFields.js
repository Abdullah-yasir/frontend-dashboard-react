import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const TextField = (props) => {
  const { label, icon, ...otherProps } = props;

  return <div className="text-field-container">
    <label className="text-field-label">{label}</label>
    <div className="text-field-icon-container" style={{ position: 'relative' }}>
      <input className="text-field" {...otherProps} />
      <FontAwesomeIcon icon={['fas', icon]} className="text-field-icon" />
    </div>
  </div>
}

export default TextField;