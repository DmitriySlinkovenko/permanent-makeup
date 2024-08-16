import React, { useState } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const customClassName = ({ isActive }) =>
    "nav__btn" + (isActive ? " nav__btn_active" : "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileNav = () => {
    const hamline = document.querySelectorAll(".hamline");
    setMobileOpen(!mobileOpen);
    hamline.forEach((line) => {
      if (!mobileOpen) {
        line.classList.add("close");
      } else {
        line.classList.remove("close");
      }
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };
  return (
    <nav className="nav__container">
      <NavLink className={customClassName} to="/">
        Home
      </NavLink>
      <a className="nav__btn" href="#about">
        About
      </a>
      <NavLink className={customClassName} to="#about">
        Portfolio
      </NavLink>
      <NavLink className={customClassName} to="/resume">
        Resume
      </NavLink>
      <NavLink className={customClassName} to="/contact">
        Contact
      </NavLink>
      <div className={"mobile__nav"} onClick={toggleMobileNav}>
        <span className="hamline"></span>
        <span className="hamline"></span>
        <span className="hamline"></span>
      </div>
      <ul
        className={
          mobileOpen ? "mobile-nav__container_active" : "mobile-nav__container"
        }
        onClick={() => {
          toggleMobileNav();
          closeMobileMenu();
        }}
      >
        <NavLink className="mobile__link" to="/">
          Home
        </NavLink>
        <NavLink className="mobile__link" to="/about">
          About
        </NavLink>
        <NavLink className="mobile__link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="mobile__link" to="/resume">
          Resume
        </NavLink>
        <NavLink className="mobile__link" to="/contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
