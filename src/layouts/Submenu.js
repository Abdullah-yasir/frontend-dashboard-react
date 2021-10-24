import React from 'react';
import { NavLink } from 'react-router-dom';

const Submenu = (props) => {
  const { links, baseUrl, children } = props;

  return (
    <div className="settings-layout full height">
      <div className="sub-menu full height">
        <div className="submenu-title">Settings</div>
        <ul className="full height no margin">
          {links.map((link) => {
            return (
              <li className={`submenu-link-item ${link.active && 'active'}`} >
                <NavLink to={baseUrl + link.link} className="submenu-link" activeClassName="active">
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="settings-content">
        {children}
      </div>
    </div>
  )
}

export default Submenu;