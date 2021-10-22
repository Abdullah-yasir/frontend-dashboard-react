import React from 'react';
import Button from '../../components/Button';

const OfferCard = (props) => {
  const { brand, offer, brandLogo } = props;
  return (
    <article className="offer-card">
      <img alt="brand logo" />
      <p>Brand:<span>{brand}</span></p>
      <p>{offer}</p>
      <div className="buttons-row">
        <Button label="Accecpt" classes="button-outline-primary" />
        <Button label="Reject" classes="button-outline-faded" />
      </div>
    </article>
  );
}

const Offers = (props) => {
  return (
    <section>
      Offers
      <OfferCard brand="nike" offer="You will be sharing the data from the account you choose." />
    </section>
  );
}

export default Offers;