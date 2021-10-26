import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';

const DeleteAccount = (props) => {
  return (
    <section className="full width height" >
      <div className="full width height content-center-h">
        <Seperator vertical />
        <div className="image-rounded  bg white faded p-2 flex center all">
          <FontAwesomeIcon icon={['fas', 'trash']} className="big-size color-primary faded" />
        </div>
        <Seperator vertical />
        <h1 style={{ marginVertical: 10 }}>Are you sure?</h1>
        <h5 className="no margin">Delete DataLucent Account!</h5>
        <div>
          <p>Are you sure that you want to delete your DataLucent Account. If so, you will loose all of your data.</p>
          <Seperator vertical space={10} />
          <div className=" content-center-h">
            <div className="buttons-row">
              <Button label="Cancel" classes="button-outline group-button" />
              <Button label="Delete Account" classes="button-outline button-outline-danger group-button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default DeleteAccount