import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { key: 'fl1', label: 'Contact Us', link: '/contact' },
  { key: 'fl2', label: 'Term of Use', link: '/terms' },
  { key: 'fl3', label: 'Privacy Policy', link: '/privacy' },
]

const icons = [
  { key: 'fi1', icon: 'facebook-square', link: '/facebook' },
  { key: 'fi2', icon: 'instagram-square', link: '/instagram' },
  { key: 'fi3', icon: 'twitter-square', link: '/twitter' },
]

const Footer = (props) => {
  const { } = props;
  return (
    <footer className="">
      <nav className="header-nav" style={{ marginLeft: 'auto' }}>
        <ul className="nav-right footer-links">
          {links.map((link) => {
            return (
              <li><Link to={link.link}>{link.label}</Link></li>
            )
          })}

          <li>
            <ul className="footer-icons">
              {icons.map((icon) => {
                return (
                  <li>
                    <Link to={icon.link}>
                      <FontAwesomeIcon icon={['fab', icon.icon]} className="footer-social" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>

    </footer>
  );
}

export default Footer;