import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">ResellSpread</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
          <a href="https://discord.gg/T4gVCex" className="nav-item nav-link">
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
