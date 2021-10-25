import React from "react";

const Radio = (props) => {
  const { name, label, type = 'radio' } = props
  return (
    <div className="radio-btn">
      <input className="radio-icon" name='option' type={type} />
      <label className="radio-label" for={name}>{label}</label>
    </div>
  )
}

export default Radio;