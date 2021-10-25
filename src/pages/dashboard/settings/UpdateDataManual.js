import React from 'react';
import Scrollable from '../../../components/Scrollable';
import StatusCard from '../../../components/StatusCard';

const UpdateDataManual = (props) => {
  return (
    <section className="full width height" >
      <Scrollable>
        <StatusCard values={['LinkedIn', '2021-10-16', 'Successfully Uploaded', 'Automated']} brand="linkedin" />
      </Scrollable>
    </section>
  );
}

export default UpdateDataManual;