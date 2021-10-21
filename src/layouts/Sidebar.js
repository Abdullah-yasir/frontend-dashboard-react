import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/actions';
import { useHistory } from 'react-router';


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
  const history = useHistory();

  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();

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