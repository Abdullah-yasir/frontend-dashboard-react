import React from 'react';

import logoTextCenter from '../../assets/dataLucent-logo-text-translucent-center.png';

import DefaultBg from '../../components/DefaultBg';
import CardSharp from '../../components/CardSharp';
import TextField from '../../components/TextFields';
import PrivacyAgreement from '../../components/PrivacyAgreement';

import { Link } from 'react-router-dom';

const Seperator = (props) => {
  const { vertical } = props;
  const styles = vertical ? { height: 20 } : { width: 20 }
  return <div style={styles} />
}

const RegisterManually = (props) => {
  const { } = props;
  return (
    <DefaultBg>
      <img alt="datalucent logo text center" src={logoTextCenter} className="logo-text-center" />
      <CardSharp style={{ width: 500, }}>
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
            <p style={{ textAlign: 'center' }}>Already have account?<Link to="/login"> Login!</Link></p>

          </div>
        </div>
      </CardSharp>
    </DefaultBg >
  );
}

export default RegisterManually;