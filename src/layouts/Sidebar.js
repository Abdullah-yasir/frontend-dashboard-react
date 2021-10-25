import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/actions';

import Button from '../components/Button';


const sidebarLinks = [
  {
    label: "Offers",
    icon: "hand-holding-usd",
    link: "/dashboard/page/content/offers",
  },
  {
    label: "Rewards",
    icon: "medal",
    link: "/dashboard/page/content/rewards",
  },
  {
    label: "Status",
    icon: "hourglass-end",
    link: "/dashboard/page/content/status",
  },
  {
    label: "Settings",
    icon: "cog",
    link: "/dashboard/settings",
    nested: []
  },
]

const Sidebar = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();

  const renderLinks = (link, index) => {
    const activeClass = index === activeIndex ? 'active' : '';
    return (
      <li onClick={() => { setActiveIndex(index) }}>
        <NavLink className="sidebar-link" to={link.link} activeClassName="active">
          <div className="sb-link-content">
            <span className="sb-link-icon-container">
              <FontAwesomeIcon className={`sb-link-icon ${activeClass}`} icon={["fas", link.icon]} />
            </span>
            <span className={`sb-link-label ${activeClass}`}>{link.label}</span>
          </div>
        </NavLink>
      </li>
    )
  }

  return (
    <div style={{ minWidth: 228 }}>
      <ul>
        {sidebarLinks.map(renderLinks)}
      </ul>
      <div className="sb-btn">
        <Button
          label="Add Social Media"
          icon="plus"
          onClick={() => {
            dispatch(showModal(true));
            // history.push('/add-social-media/media')
            window.location.href = '/add-social-media/media';
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;