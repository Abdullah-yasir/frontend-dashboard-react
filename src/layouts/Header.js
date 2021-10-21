import React from 'react';
import { Link } from 'react-router-dom';
import logoHorizontal from "../assets/datalucent-logo-horizontal.png";

const headerLinks = [
  { label: 'About Us', link: '/about' },
  { label: 'FAQ', link: '/faq' },
  { label: 'Become a Partener', link: '/partener' },
  { label: 'Privacy Plolicy', link: '/privacy' }
]

const Header = (props) => {
  const { } = props;

  const renderLinks = (link) => {
    return (
      <li>
        <Link to={link.link}>
          {link.label}
        </Link>
      </li>
    )
  }

  return (
    <header>
      <nav className="header-nav">
        <div className="nav-left">
          <Link to="/">
            <img className="logo-horizontal" alt="logo horizontal" src={logoHorizontal} />
          </Link>
        </div>
        <ul className="nav-right">
          {headerLinks.map(renderLinks)}
          <li>
            <img className="user-avatar-header" alt="user avatar" src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/58-512.png" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;