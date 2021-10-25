import React from 'react';

const PrivacyAgreement = (props) => {
  return (
    <div className="radio-btn" style={{ justifyContent: 'center', marginBottom: 15 }}>
      <input className="radio-icon" name='agreement' type="checkbox" />
      <label className="radio-label" for="agreement">I agree to the Terms and Conditions. </label>
    </div>
  )
}

export default PrivacyAgreement;