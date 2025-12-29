import React from "react";
import "./certificates.css";
import { certificatesData } from "./Data";

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My Achievements</span>

      <div className="certificates__container container grid">
        <div className="certificates__content">
          <div className="certificates__list">
            {certificatesData.map((cert) => (
              <div className="certificates__card" key={cert.id}>
                <i className="bx bx-certification certificates__icon"></i>
                <h3 className="certificates__name">{cert.name}</h3>
                <span className="certificates__issuer">{cert.issuer}</span>
                <span className="certificates__year">{cert.year}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificates__link"
                  >
                    View Credential
                    <i className="bx bx-right-arrow-alt certificates__link-icon"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
