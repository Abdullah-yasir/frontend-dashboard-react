import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';


const radioOptions = [
  { name: 'fb', label: 'Allow DataLucent to acquire my data', info: `Our automated data acquisition process will acquire your social media data for you in a secure manner. Upon selecting this option you will be asked to provide your login information for each social media site that you wish for us to acquire your data. Your login information is stored in an encrypted format in a highly secure data repository and is not visible to anyone. If you wish to proceed, please click 'Continue with option 1' button.`, checked: true },
  { name: 'gg', label: 'I will acquire my data and send it to DataLucent', info: `If you wish to download your data manually go with option 2. You will redirect to new page, where you can see how to download your data from your selected platform manually.` }
]

const DataAcquisition = (props) => {
  const history = useHistory();
  return (
    <div>
      <h5 className="modal-subhead">Data Acquisition</h5>
      <p className="modal-info">You have TWO options for acquiring your social media data. Please select which option you prefer.</p>
      <div className="media-options">
        <form>
          {radioOptions.map((radio) => {
            return (
              <>
                <div className="radio-btn">
                  <input className="radio-icon" name='option' type="radio" />
                  <label className="radio-label" style={{ fontWeight: 'bold' }} for={radio.name}>{radio.label}</label>
                </div>
                <p className="modal-info">{radio.info}</p></>
            );
          })}
        </form>
      </div>
      <Button label="Continue" style={{ marginLeft: 'auto' }} onClick={() => history.push("/data")} />
    </div>
  )
}

export default DataAcquisition;