import React, { useState, useEffect } from "react";
import "./topbar.css";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`topbar ${isScrolled ? "black-bg" : "clear-bg"}`}>
      <Logo />
      <Hamburger />
    </div>
  );
}

export default Topbar;
