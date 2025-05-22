import React from 'react';
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const linkGroups = [
    ['Audio Description', 'Investor Relations', 'Legal Notices'],
    ['Help Center', 'Jobs', 'Cookie Preferences'],
    ['Gift Cards', 'Terms of Use', 'Corporate Information'],
    ['Media Center', 'Privacy', 'Contact Us']
  ];

  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>

        <div className="footer_links">
          {linkGroups.map((group, idx) => (
            <ul key={idx}>
              {group.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="service_code">
          <button>Service Code</button>
        </div>

        <div className="copy_write">
          &copy; 1997–2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;