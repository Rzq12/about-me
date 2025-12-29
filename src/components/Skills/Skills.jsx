import React from "react";
import "./skills.css";
import Data_Scientist from "./Data_Scientist";
import Machine_Learning from "./Machine_Learning";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Data_Scientist />

        <Machine_Learning />
      </div>
    </section>
  );
};

export default Skills;
