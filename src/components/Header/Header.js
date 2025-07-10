// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/">Aakash Labs</Link>
//         </div>
//         <nav className="nav">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/team">Our Team</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//             <li><Link to="/api-page">API Demo</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Task Test</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/team" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/apipage" onClick={() => setMenuOpen(false)}>API Demo</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
