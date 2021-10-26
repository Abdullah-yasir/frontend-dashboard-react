import React from 'react';
import userAvatarDefault from '../../../assets/user-avatar-default.png';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import TextField from '../../../components/TextFields';

const EditProfile = (props) => {
  return (
    <section className="full width height" >
      <div className="content-center-h">
        <Seperator vertical />
        <div className="image-rounded">
          <img src={userAvatarDefault} alt="user avatar" />
        </div>
        <Seperator vertical />
        <div className="width-700">
          <div className="flex-row-wrap full width">
            <TextField label="First Name" value="John" icon="user" />
            <Seperator />
            <TextField label="Last Name" value="Doe" icon="user" />
          </div>
          <div className="flex-row-wrap full width">
            <TextField label="Email" value="john.doe@mail.com" icon="envelope" />
            <Seperator />
            <TextField label="Education" value="Graduation" icon="graduation-cap" />
          </div>
          <div className="flex-row-wrap full width">
            <TextField label="Date of Birth" value="1989-12-03" type="date" />
            <Seperator />
            <TextField label="Gender" value="Male" icon="caret-down" />
          </div>
          <div className="flex-row-wrap full width">
            <TextField label="Address" value="Street ABC, city XYZ, country USA" icon="map-marker-alt" />
          </div>
        </div>
        <Seperator vertical />
        <Button label="Save Changes" className="button button-outline-primary" />
      </div>
    </section>
  );
}

export default EditProfile;