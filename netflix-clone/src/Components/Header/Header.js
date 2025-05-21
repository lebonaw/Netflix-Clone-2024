import React from 'react';
import './Header.css';
import NetflixLogo from '../../assets/WhatsApp Image 2025-05-16 at 13.27.20.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <nav className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" /></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li aria-label="Search"><SearchIcon /></li>
            <li aria-label="Notifications"><NotificationsNoneIcon /></li>
            <li aria-label="Account"><AccountBoxIcon /></li>
            <li aria-label="Dropdown"><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;