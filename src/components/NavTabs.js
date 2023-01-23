import React from 'react';
import "../styles/Nav.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-tabs">
      <li className="nav-">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About'}
        >
          About Me
        </a>
      </li>
      <li className="nav-">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' }
        >
          Resume
        </a>
      </li>
      <li className="nav-">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
