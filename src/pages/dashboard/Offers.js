import React from 'react';
import Button from '../../components/Button';

const offers = [
  { brand: 'Nike', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GUCCI', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'KFC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'XYZ', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'ABC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRD', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRp', offer: `You will be sharing the data from the account you choose.`, image: '' },
]

const OfferCard = (props) => {
  const { brand, offer, brandLogo } = props;
  return (
    <article className="offer-card">
      <img alt="brand logo" src={brandLogo} />
      <p>Brand: <span className="offer-card-brand">{brand}</span></p>
      <p>{offer}</p>
      <div className="buttons-row" style={{ justifyContent: 'flex-end' }}>
        <Button label="Reject" classes="button-outline-faded group-button" />
        <Button label="Accecpt" classes="button-outline-primary group-button" />
      </div>
    </article>
  );
}

const Offers = (props) => {
  return (
    <section className="container flex-row-wrap">
      {offers.map((offer) => <OfferCard brand={offer.brand} offer={offer.offer} brandLogo={offer.image} />)}
    </section>
  );
}

export default Offers;