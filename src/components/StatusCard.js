import React from 'react';
import Card from './Card';

import googleIcon from '../assets/google-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import Button from './Button';

const labels = ['Social Media Date File', 'Last Uploaded', 'Status', 'Type'];

const StatusCard = (props) => {
  const { values = [], brand, type } = props;

  let brandIcon = null;
  switch (brand) {
    case 'google':
      brandIcon = googleIcon;
      break;
    case 'linkedin':
      brandIcon = linkedinIcon;
      break;
    case 'facebook':
      brandIcon = facebookIcon;
      break;
    case 'twitter':
      brandIcon = twitterIcon;
      break;

    default:
      break;
  }

  return (
    <Card className="status-card box-shadow">
      <div className="flex-row-wrap justify-btw">
        <div className="status-details flex-row-wrap">
          <div className="status-labels">
            {labels.map((label) => {
              return <p>{label}: </p>
            })}
          </div>
          <div className="status-values">
            {values.map((value) => {
              return <p style={{ fontWeight: 'bold' }}>{value}</p>
            })}
          </div>
        </div>
        <div className="status-logo">
          <img src={brandIcon} alt="brand icon" />
        </div>
      </div>
      <Button label={values[3] === 'Automated' ? 'Run Now' : 'Upload File'} className="button button-outline-primary" style={{ marginLeft: 'auto' }} />
    </Card>
  )
}

export default StatusCard;