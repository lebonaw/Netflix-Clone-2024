import React from 'react';
import './Header.css';
import NetflixLogo from '../../assets/NetflixLogo.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <nav className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </nav>

        <div className="header_right">
          <ul>
            <li title="Search"><SearchIcon /></li>
            <li title="Notifications"><NotificationsNoneIcon /></li>
            <li title="Account"><AccountBoxIcon /></li>
            <li title="More Options"><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
