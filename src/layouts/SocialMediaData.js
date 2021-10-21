import React from 'react';

const numbers = [
  { link: '/media' },
  { link: '/data' },
  { link: '/creds' },
  { link: '/privay' },
]

const SocialMediaData = (props) => {
  return (
    <article>
      <div className="number-tabs">
        <div className="number-circle active">
          <span className="number">1</span>
        </div>
        <div className="number-bg-line" />
        <div className="number-circle">
          <span className="number">2</span>
        </div>
        <div className="number-bg-line" />
        <div className="number-circle">
          <span className="number">3</span>
        </div>
      </div>
    </article>
  )
}

export default SocialMediaData;