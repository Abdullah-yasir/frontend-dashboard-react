import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';


const radioOptions = [
  { name: 'fb', label: 'Facebook', checked: true },
  { name: 'gg', label: 'Google' },
  { name: 'ig', label: 'Instagram' },
  { name: 'tt', label: 'Twitter' },
  { name: 'li', label: 'Linkedin' }
]

const DataAcquisition = (props) => {
  const history = useHistory();
  return (
    <div>
      <h5 className="modal-subhead">Data Acquisition</h5>
      <p className="modal-info">Which social media data do you use and want to include as potential social lisence.</p>
      <p>Select social media to download data.</p>
      <div className="media-options">
        <form>
          {radioOptions.map((radio) => {
            return (
              <div className="radio-btn">
                <input className="radio-icon" name='option' type="radio" />
                <label className="radio-label" for={radio.name}>{radio.label}</label>
              </div>
            );
          })}
        </form>
      </div>
      <Button label="Continue" style={{ marginLeft: 'auto' }} onClick={() => history.push("/data")} />
    </div>
  )
}

export default DataAcquisition;