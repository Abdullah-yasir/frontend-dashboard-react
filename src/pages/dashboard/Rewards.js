import React from 'react';

const rewards = [
  { brand: 'Nike', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'GUCCI', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'KFC', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'XYZ', offer: `You will be sharing the data from the account you choose.`, image: '' },
  { brand: 'ABC', offer: `You will be sharing the data from the account you choose.`, image: '' },

]

const OfferCard = (props) => {
  const { brand, offer, brandLogo } = props;
  return (
    <article className="offer-card box-shadow">
      <img alt="brand logo" src={brandLogo} />
      <p>Brand: <span className="offer-card-brand">{brand}</span></p>
      <p>{offer}</p>

    </article>
  );
}

const Rewards = (props) => {
  return (
    <section className="container flex-row-wrap">
      {rewards.map((offer) => <OfferCard brand={offer.brand} offer={offer.offer} brandLogo={offer.image} />)}
    </section>
  );
}

export default Rewards;