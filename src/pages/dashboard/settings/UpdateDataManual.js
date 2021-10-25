import React from 'react';
import Scrollable from '../../../components/Scrollable';
import StatusCard from '../../../components/StatusCard';

const UpdateDataManual = (props) => {
  return (
    <section className="full width height" style={{ padding: 20 }}>
      <Scrollable>
        <StatusCard values={['LinkedIn', '2021-10-16', 'Successfully Uploaded', 'Manual']} brand="linkedin" />
      </Scrollable>
    </section>
  );
}

export default UpdateDataManual;