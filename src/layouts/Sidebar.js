import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const sidebarLinks = [
  {
    label: "Offers",
    icon: "hand-holding-usd",
    link: "/dashboard/offers",
  },
  {
    label: "Rewards",
    icon: "medal",
    link: "/dashboard/rewards",
  },
  {
    label: "Status",
    icon: "hourglass-end",
    link: "/dashboard/status",
  },
  {
    label: "Settings",
    icon: "cog",
    link: "/dashboard/settings",
    nested: []
  },
]

const Sidebar = (props) => {
  const { } = props;
  const [activeIndex, setActiveIndex] = useState(0);



  const renderLinks = (link, index) => {
    const activeClass = index === activeIndex ? 'active' : '';
    return (
      <li className={`sidebar-link ${activeClass}`} onClick={() => { setActiveIndex(index) }}>
        <Link to={link.link}>
          <div className="sb-link-content">
            <span className="sb-link-icon-container">
              <FontAwesomeIcon className={`sb-link-icon ${activeClass}`} icon={["fas", link.icon]} />
            </span>
            <span className={`sb-link-label ${activeClass}`}>{link.label}</span>
          </div>
        </Link>
      </li>
    )
  }

  return (
    <div>
      <ul>
        {sidebarLinks.map(renderLinks)}
      </ul>
    </div>
  );
}

export default Sidebar;