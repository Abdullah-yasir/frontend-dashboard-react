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


const Login = (props) => {
  const { } = props;
  return (
    <DefaultBg>
      <img alt="datalucent logo text center" src={logoTextCenter} className="logo-text-center" />
      <CardSharp style={{ width: 500, }}>
        <div className="content-center-h">
          <h1 className='heading-1' style={{ textAlign: 'center' }} >
            Sign In
          </h1>
          <IconButton label="Sign in with Google" image={googleIcon} style={{ marginBottom: 20 }} />
          <IconButton label="Sign in with Linkedin" image={linkedinIcon} style={{ marginBottom: 20, backgroundColor: '#0077B7', borderColor: 'white' }} labelStyle={{ color: 'white' }} />
          <IconButton label="Sign in with Amazon" image={amazonIcon} style={{ backgroundColor: '#F6C950', borderColor: 'white' }} />
          <OrSeperator />
          <div className="manual-login">
            <TextField label="Username" icon="user" />
            <TextField label="Password" type="password" icon="lock" />
            <button className="button-default" onClick={() => window.location.href = "/dashboard/offers"}>Login</button>
            <p style={{ textAlign: 'center' }}>Don’t have an account?<a href="/signup"> Register Now!</a></p>

          </div>
        </div>
      </CardSharp>
    </DefaultBg >
  );
}

export default Login;