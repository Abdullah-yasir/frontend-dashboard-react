import React from 'react';

import logoTextCenter from '../../assets/dataLucent-logo-text-translucent-center.png';
import googleIcon from '../../assets/google-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import amazonIcon from '../../assets/amazon-icon.png';

import IconButton from '../../components/IconButton';
import DefaultBg from '../../components/DefaultBg';
import CardSharp from '../../components/CardSharp';
import OrSeperator from '../../components/OrSeperator';
import TextField from '../../components/TextFields';


const Signup = (props) => {

  return (
    <DefaultBg>
      <img alt="datalucent logo text center" src={logoTextCenter} className="logo-text-center" />
      <CardSharp style={{ padding: 30, width: 550 }}>
        <div className="content-center-h">
          <h3 className='heading-1' style={{ textAlign: 'center' }} >
            Link an account of your choice to get started
          </h3>
          <p className="para-center" style={{ marginTop: 0, marginBottom: 25 }}>
            You will be sharing the data from the account you choose. DataLucent is committed to transparency regarding your data. Check out our <a href="/">Privacy Policy</a> for more info.
          </p>
          <IconButton label="Signup with Google" image={googleIcon} style={{ marginBottom: 20 }} />
          <IconButton label="Signup with Linkedin" image={linkedinIcon} style={{ marginBottom: 20, backgroundColor: '#0077B7', borderColor: 'white' }} labelStyle={{ color: 'white' }} />
          <IconButton label="Signup with Amazon" image={amazonIcon} style={{ backgroundColor: '#F6C950', borderColor: 'white' }} />
          <OrSeperator />
          <button className="button-default" style={{ marginBottom: 35 }}>Register Manually</button>
        </div>
      </CardSharp>
    </DefaultBg >
  );
}

export default Signup;