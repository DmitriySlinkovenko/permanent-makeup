import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <Nav />
      </div>
    </header>
  );
}
