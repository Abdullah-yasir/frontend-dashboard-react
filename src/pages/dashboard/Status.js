import React from 'react';
import Button from '../../components/Button';

const status = [
  { brand: 'Nike', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GUCCI', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'KFC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'XYZ', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'ABC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRD', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRp', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'ABC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRD', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GRp', offer: `You will be sharing the data from the account you choose.`, image: '' },

]

const OfferCard = (props) => {
  const { brand, offer, brandLogo } = props;
  return (
    <article className="offer-card box-shadow">
      <img alt="brand logo" src={brandLogo} />
      <p>Brand: <span className="offer-card-brand">{brand}</span></p>
      <p>{offer}</p>
      <div className="buttons-row" style={{ justifyContent: 'flex-end' }}>
        <Button label="Upload" classes="button-outline-primary group-button" />
      </div>
    </article>
  );
}

const Status = (props) => {
  return (
    <section className="container flex-row-wrap">
      {status.map((offer) => <OfferCard brand={offer.brand} offer={offer.offer} brandLogo={offer.image} />)}
    </section>
  );
}

export default Status;