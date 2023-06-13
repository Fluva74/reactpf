import React, { useState } from "react";
import "./hamburger.css";

function Hamburger() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuToggle}
        className="menu-toggle"
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="menu-overlay">
        <ul className="menu-list">
          <li>
            <a href="#workLink" onClick={toggleMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="https://manifestblogs.com/" onClick={toggleMenu}>
              Blog
            </a>
          </li>
          <li>
            <a href="https://manifestblogs.com/contact/" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://pdfhost.io/view?doc=33a1e832-5fbf-40e6-8fb1-2e83c6807d48"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hamburger;
