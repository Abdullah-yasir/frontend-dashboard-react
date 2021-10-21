import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const sidebarLinks = [
  {
    label: "Offers",
    icon: "hand-holding-usd",
    link: "/offers",
  },
  {
    label: "Rewards",
    icon: "hand-holding-usd",
    link: "/offers",
  },
  {
    label: "Status",
    icon: "hand-holding-usd",
    link: "/offers",
  },
  {
    label: "Settings",
    icon: "hand-holding-usd",
    link: "/offers",
    nested: []
  },
]

const Sidebar = (props) => {
  const { } = props;
  const renderLinks = (link) => {
    return (
      <li>
        <Link to={link.link}>
          <div>
            <FontAwesomeIcon icon={["fas", link.icon]} />
            <span>{link.label}</span>
          </div>
        </Link>
      </li>
    )
  }
  return (
    <div>
      somsdgl
      <FontAwesomeIcon icon={['fas', 'accessible-icon']} />
      <ul>
        {sidebarLinks.map(renderLinks)}
      </ul>
    </div>
  );
}

export default Sidebar;