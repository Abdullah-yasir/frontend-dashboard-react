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
      <div className="row-center">
        <h3 className="modal-title-text">Add Social Media</h3>
      </div>
      <div className="row-center">
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
      </div>
      <h5 className="modal-subhead">Social Media Data</h5>
      <p className="modal-info">Which social media data do you use and want to include as potential social lisence.</p>
      <p>Select social media to download data.</p>
      <div className="media-options">
        <form>
          <div className="radio-btn">
            <input className="radio-icon" name="facebook" type="radio" />
            <label className="radio-label" for="facebook">Facebook</label>
          </div>
        </form>
      </div>
    </article>
  )
}

export default SocialMediaData;