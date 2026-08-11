import React from "react";
import "./projectDetail.css";

const ProjectDetail = ({ project, onBack, onSelectOther, otherProjects }) => {
  return (
    <div className="project-detail">
      <button className="project-detail__back" onClick={onBack}>
        <i className="bx bx-left-arrow-alt"></i> Back to Portfolio
      </button>

      <div className="project-detail__content">
        <div className="project-detail__image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-detail__info">
          <span className="project-detail__category">{project.category}</span>
          <h2 className="project-detail__title">{project.title}</h2>
          <p className="project-detail__description">{project.description}</p>

          <div className="project-detail__tech">
            <h4>Tech Stack</h4>
            <div className="project-detail__tags">
              {project.tech.map((t, i) => (
                <span className="project-detail__tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex"
          >
            View on GitHub
            <i className="bx bx-right-arrow-alt button__icon"></i>
          </a>
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="project-detail__others">
          <h3 className="project-detail__others-title">Other Projects</h3>
          <div className="project-detail__others-grid">
            {otherProjects.map((item) => (
              <div
                className="project-detail__other-card"
                key={item.id}
                onClick={() => onSelectOther(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="project-detail__other-info">
                  <h4>{item.title}</h4>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
