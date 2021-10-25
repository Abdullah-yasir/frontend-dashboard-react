import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import { isActiveUrl } from '../utils';

const Submenu = (props) => {
  const { links, baseUrl, children, title } = props;
  const history = useHistory();

  return (
    <div className="settings-layout full height">
      <div className="sub-menu full height">
        <TitleBar title={title} />
        <ul className="full height no margin">
          {links.map((link) => {
            const isActive = isActiveUrl(link.link);
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
      <div className="settings-content">
        {children}
      </div>
    </div>
  )
}

export default Submenu;