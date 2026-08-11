import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Riezqi</h1>
        <span className="footer__subtitle">ML & Data Enthusiast</span>

        <ul className="footer__list">
          <li>
            <a href="/#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="/#experiences" className="footer__link">
              Experiences
            </a>
          </li>
          <li>
            <a href="/#skills" className="footer__link">
              Stack
            </a>
          </li>
          <li>
            <a href="/#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/riezqidr"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Rzq12"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/riezqidr/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Riezqi. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
