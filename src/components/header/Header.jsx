import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Riezqi
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="uil uil-home nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <a href="/#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="/#experiences" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Experiences
              </a>
            </li>

            <li className="nav__item">
              <a href="/#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Stack
              </a>
            </li>

            <li className="nav__item">
              <a href="/#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Service
              </a>
            </li>

            <li className="nav__item">
              <a href="/#certificates" className="nav__link">
                <i className="uil uil-award nav__icon"></i> Certificates
              </a>
            </li>

            <li className="nav__item">
              <a href="/#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="/#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <button
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
            aria-label="Close navigation menu"
          ></button>
        </div>

        <button
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
          aria-label="Toggle navigation menu"
          aria-expanded={Toggle}
        >
          <i className="uil uil-apps" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
