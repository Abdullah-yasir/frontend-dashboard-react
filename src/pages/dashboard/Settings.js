import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Edit Profile', link: '/edit-profile' },
  { label: 'Change Password', link: '/change-password' },
  { label: 'Update Data', link: '/update-data' },
  { label: 'Delete Account', link: '/delete-account' },
];


const Settings = (props) => {
  return (
    <section className="full width height" >
      <div className="settings-layout full height">
        <div className="sub-menu full height">
          <ul className="full height no margin">
            {menuItems.map((link) => {
              return (
                <li>
                  <NavLink to={link.link} className="sub-menu-link" activeClassName="active">
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="settings-content"></div>
      </div>
    </section>
  );
}

export default Settings;