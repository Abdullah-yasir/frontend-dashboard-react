import React from 'react';
import { useLocation } from 'react-router';

const numbers = ['media', 'data', 'creds', 'privacy'];

const SocialMediaModal = (props) => {
  const { children } = props;
  const location = useLocation();
  return (
    <article>
      <div className="row-center">
        <h3 className="modal-title-text">Add Social Media</h3>
      </div>
      <div className="article-body">
        <div className="row-center">

          <div className="number-tabs">
            {numbers.map((url, index) => {
              const lastIndex = index === numbers.length - 1;
              const isActive = location.pathname?.split('/').at(-1) === url
              return (
                <>
                  <div className={`number-circle ${isActive ? 'active' : ''}`}>
                    <span className="number">{index + 1}</span>
                  </div>
                  {(!lastIndex ? <div className="number-bg-line" /> : null)}
                </>
              )
            })}

          </div>
        </div>
        {children}
      </div>
    </article>
  )
}

export default SocialMediaModal;