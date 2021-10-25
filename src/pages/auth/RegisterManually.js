import React from 'react';

import TextField from '../../components/TextFields';
import PrivacyAgreement from '../../components/PrivacyAgreement';
import Seperator from '../../components/Seperator';

import { Link } from 'react-router-dom';



const RegisterManually = (props) => {
  const { } = props;
  return (
    <div className="content-center-h">
      <h3 className='heading-1' style={{ textAlign: 'center' }} >
        Register
      </h3>
      <div className="flex-row-wrap full width">
        <TextField label="First Name" icon="user" />
        <Seperator />
        <TextField label="Last Name" icon="user" />
      </div>
      <div className="flex-row-wrap full width">
        <TextField label="Email" icon="envelope" />
      </div>
      <div className="flex-row-wrap full width">
        <TextField label="Date of Birth" type="date" />
        <Seperator />
        <TextField label="Gender" icon="caret-down" />
      </div>
      <div className="flex-row-wrap full width">
        <TextField label="Address" icon="map-marker-alt" />
      </div>
      <div className="flex-row-wrap full width">
        <TextField label="Education" icon="graduation-cap" />
      </div>
      <div className="flex-row-wrap full width">
        <TextField label="Password" icon="lock" type="password" />
        <Seperator />
        <TextField label="Re-type Password" type="password" icon="lock" />
      </div>
      <div className="manual-login flex-column justify-center">
        <PrivacyAgreement />
        <button className="button-default" onClick={() => window.location.href = "/dashboard/offers"}>Register</button>
        <p style={{ textAlign: 'center' }}>Already have account?<Link to="/auth/login"> Login!</Link></p>

      </div>
    </div>

  );
}

export default RegisterManually;