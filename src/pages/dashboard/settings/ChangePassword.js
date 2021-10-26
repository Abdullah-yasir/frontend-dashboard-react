import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import userAvatarDefault from '../../../assets/user-avatar-default.png';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import TextField from '../../../components/TextFields';

const ChangePassword = (props) => {
  return (
    <section className="full width height" >
      <div className="content-center-h">
        <Seperator vertical />
        <div className="image-rounded  bg white faded p-2 flex center all">
          <FontAwesomeIcon icon={['fas', 'lock']} className="big-size color-primary faded" />
        </div>
        <Seperator vertical />
        <div className="width-700">
          <div className="flex-row-wrap full width">
            <TextField label="Old Password" type="password" icon="password" />
          </div>
          <div className="flex-row-wrap full width">
            <TextField label="New Password" type="password" icon="password" />
          </div>
          <div className="flex-row-wrap full width">
            <TextField label="Retype New Password" type="password" icon="password" />
          </div>
        </div>
        <Seperator vertical />
        <Button label="Save Changes" className="button button-outline-primary" />
      </div>
    </section>
  );
}

export default ChangePassword;