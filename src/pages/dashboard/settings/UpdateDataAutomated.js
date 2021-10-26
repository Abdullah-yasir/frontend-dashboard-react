import React from 'react';
import Scrollable from '../../../components/Scrollable';
import Seperator from '../../../components/Seperator';
import StatusCard from '../../../components/StatusCard';

const status = [
  { brand: 'google', values: ['Google', '2021-10-16', 'Successfully Uploaded', 'Automated'] },
  { brand: 'linkedin', values: ['Linkedin', '2021-10-16', 'Successfully Uploaded', 'Automated'] },
  { brand: 'facebook', values: ['Facebook', '2021-10-16', 'Successfully Uploaded', 'Automated'] },
  { brand: 'twitter', values: ['Twitter', '2021-10-16', 'Successfully Uploaded', 'Automated'] }

]

const UpdateDataAutomated = (props) => {
  return (
    <section className="full width height" >
      <Scrollable>
        {status.map((status) => <StatusCard values={status.values} brand={status.brand} />)}
        <Seperator vertical space={400} />
      </Scrollable>
    </section>
  );
}

export default UpdateDataAutomated;