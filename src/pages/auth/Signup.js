import React from 'react';

import googleIcon from '../../assets/google-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import amazonIcon from '../../assets/amazon-icon.png';
import facebookIcon from '../../assets/facebook-icon.png';

import IconButton from '../../components/IconButton';

import OrSeperator from '../../components/OrSeperator';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  const history = useHistory();
  return (

    <div className="content-center-h">
      <h3 className='heading-1' style={{ textAlign: 'center' }} >
        Link an account of your choice to get started
      </h3>
      <p className="para-center" style={{ marginTop: 0, marginBottom: 25 }}>
        You will be sharing the data from the account you choose. DataLucent is committed to transparency regarding your data. Check out our <a href="/">Privacy Policy</a> for more info.
      </p>
      <IconButton label="Signup with Google" image={googleIcon} style={{ marginBottom: 20 }} />
      <IconButton label="Login with Facebook" image={facebookIcon} style={{ marginBottom: 20 }} />
      {/* <IconButton label="Signup with Linkedin" image={linkedinIcon} style={{ marginBottom: 20, backgroundColor: '#0077B7', borderColor: 'white' }} labelStyle={{ color: 'white' }} /> */}
      {/* <IconButton label="Signup with Amazon" image={amazonIcon} style={{ backgroundColor: '#F6C950', borderColor: 'white' }} /> */}
      <OrSeperator />
      <button
        className="button-default"
        onClick={() => {
          history.push('/auth/register')
        }} >
        Register Manually
      </button>
      <p style={{ textAlign: 'center' }}>
        Already have an account?<Link to="/auth/login"> Login!</Link>
      </p>
    </div>

  );
}

export default Signup;