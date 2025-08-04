import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">experience</h3>
        <span className="about__subtitle">1 years</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-briefcase about__icon"></i>
        <h3 className="about__title">Comleted</h3>
        <span className="about__subtitle">3 projects</span>
      </div>
    </div>
  );
};

export default Info;
