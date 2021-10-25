import React from 'react';
import Button from '../../components/Button';
import StatusCard from '../../components/StatusCard';

const status = [
  { brand: 'google', values: ['Google', '2021-10-16', 'Successfully Uploaded', 'Manual'] },
  { brand: 'linkedin', values: ['Linkedin', '2021-10-16', 'Successfully Uploaded', 'Manual'] },
  { brand: 'facebook', values: ['Facebook', '2021-10-16', 'Successfully Uploaded', 'Manual'] },
  { brand: 'twitter', values: ['Twitter', '2021-10-16', 'Successfully Uploaded', 'Manual'] }

]


const Status = (props) => {
  return (
    <section className="container flex-row-wrap">
      {status.map((status) => <StatusCard values={status.values} brand={status.brand} />)}
    </section>
  );
}

export default Status;