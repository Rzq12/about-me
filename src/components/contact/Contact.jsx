import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <h2 className="section__title">Let's build something with AI</h2>
      <p className="contact__tagline">
        Open to AI Engineer, Machine Learning Engineer, and AI/ML internship
        opportunities.
      </p>

      <div className="contact__container container grid">
        <div className="contact__info">
          <a
            href="mailto:riezqi.dhermatia@gmail.com"
            className="contact__card"
            aria-label="Send email"
          >
            <i className="bx bx-mail-send contact__card-icon" aria-hidden="true"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">
              riezqi.dhermatia@gmail.com
            </span>
            <span className="contact__button">
              Send message
              <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/riezqidr/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            aria-label="Visit LinkedIn profile"
          >
            <i className="bx bxl-linkedin contact__card-icon" aria-hidden="true"></i>
            <h3 className="contact__card-title">LinkedIn</h3>
            <span className="contact__card-data">linkedin.com/in/riezqidr</span>
            <span className="contact__button">
              View Profile
              <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
            </span>
          </a>

          <a
            href="https://github.com/Rzq12"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            aria-label="Visit GitHub profile"
          >
            <i className="bx bxl-github contact__card-icon" aria-hidden="true"></i>
            <h3 className="contact__card-title">GitHub</h3>
            <span className="contact__card-data">github.com/Rzq12</span>
            <span className="contact__button">
              View Code
              <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
