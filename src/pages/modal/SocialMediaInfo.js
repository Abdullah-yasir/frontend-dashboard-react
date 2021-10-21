import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import TextField from '../../components/TextFields';


const SocialMediaInfo = (props) => {
  const history = useHistory();
  return (
    <div>
      <h5 className="modal-subhead">Social media information</h5>
      <p className="modal-info">You will be sharing the data from the account you choose. DataLucent is committed to transparency regarding your data. Check out our <a href='/privacy'>Privacy Policy</a> for more info. </p>
      <div className="creds-input-fields">
        <TextField label="Username" icon="user" style={{ width: 240 }} />
        <TextField label="Pasword" icon="password" style={{ width: 240 }} />
      </div>
      <Button label="Continue" style={{ marginLeft: 'auto' }} onClick={() => history.push("/privacy")} />
    </div>
  )
}

export default SocialMediaInfo;