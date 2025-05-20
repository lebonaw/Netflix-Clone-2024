import React from 'react';
import "./Footer.css"
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
        {/* Social Media Icons */}
        <div className="footer_icons" aria-label="Social Media Links">
          <a href="#" aria-label="Facebook" rel="noopener noreferrer">
            <FacebookOutlinedIcon fontSize="large" />
          </a>
          <a href="#" aria-label="Instagram" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="#" aria-label="YouTube" rel="noopener noreferrer">
            <YouTubeIcon fontSize="large" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer_links">
          {linkGroups.map((group, idx) => (
            <ul key={`group-${idx}`}>
              {group.map((item, index) => (
                <li key={`item-${idx}-${index}`}>
                  <a href="#" aria-label={item}>{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Service Code Button */}
        <div className="service_code">
          <button type="button">Service Code</button>
        </div>

        {/* Copyright */}
        <div className="copy_write">
          &copy; 1997–2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from 'react';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import "./Footer.css"

// const Footer = () => {
//   return (
//     <footer className="footer_outer_container">
//       <div className="footer_inner_container">
//         <div className="footer_icons">
//           <FacebookOutlinedIcon />
//           <InstagramIcon />
//           <YouTubeIcon />
//         </div>

//         <div className="footer_data">
//           <div>
//               <ul>
//                 <li>Audio Description</li>
//                 <li>Investor Relations</li>
//                 <li>Legal Notice</li>
//               </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Preferences</li>
             
//             </ul>
//           </div>
//           <div>
//             <ul>
//                 <li>Gift Cards</li>
//                 <li>Terms of Use</li>
//                 <li>Corporate Information</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;