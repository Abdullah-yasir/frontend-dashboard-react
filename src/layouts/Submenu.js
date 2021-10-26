import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import TitleBar from '../components/TitleBar';

const Submenu = (props) => {
  const { links, baseUrl, children, title } = props;

  return (
    <div className="settings-layout full height">
      <div className="sub-menu full height">
        <TitleBar title={title} />
        <ul className="full height no margin">
          {links.map((link) => {
            return (
              <li >
                <NavLink to={baseUrl + link.link} className="submenu-link-item submenu-link" activeClassName="active">
                  <div className="submenu-item" ><span>{link.label}</span><FontAwesomeIcon icon={['fas', 'angle-right']} /></div>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="settings-content full width height">
        {children}
      </div>
    </div>
  )
}

export default Submenu;