import React, { useState } from 'react';
import './hamburger.css';

function Hamburger() {
  const [menuToggle, setMenuToggle] = useState(false);
  
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  
  return (
    <>
      <input type="checkbox" id="menu-toggle" checked={menuToggle} className="menu-toggle" onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="menu-overlay">
        <ul className="menu-list">
          <li>
            <a href="#workLink" onClick={toggleMenu}>Work</a>
          </li>
          <li>
            <a href="/about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#blogLine" onClick={toggleMenu}>Blog</a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>Contact</a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>Resume</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hamburger;
