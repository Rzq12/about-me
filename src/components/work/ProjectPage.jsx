import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "./Data";
import "./projectDetail.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pd-section">
        <div className="container pd-not-found">
          <h2>Project not found</h2>
          <Link to="/#portfolio" className="button button--flex">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  const otherProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 6);

  return (
    <section className="pd-section">
      <div className="container">
        {/* 1. Back */}
        <Link to="/#portfolio" className="pd-back">
          <i className="bx bx-left-arrow-alt"></i> Back to Portfolio
        </Link>

        {/* Header */}
        <div className="pd-header">
          <span className="pd-category">{project.category}</span>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-tagline">{project.tagline}</p>
        </div>

        {/* 5. Project Visual */}
        <div className="pd-visual">
          <img src={project.image} alt={project.title} />
        </div>

        {/* 6. Overview */}
        <div className="pd-block">
          <h2 className="pd-h2">Overview</h2>
          <div className="pd-overview-grid">
            <div className="pd-overview-item">
              <h4>What is this?</h4>
              <p>{project.overview.what}</p>
            </div>
            <div className="pd-overview-item">
              <h4>Problem it solves</h4>
              <p>{project.overview.problem}</p>
            </div>
            <div className="pd-overview-item">
              <h4>Why built</h4>
              <p>{project.overview.why}</p>
            </div>
          </div>
        </div>

        {/* 7. Key Features */}
        <div className="pd-block">
          <h2 className="pd-h2">Key Features</h2>
          <div className="pd-features">
            {project.features.map((f, i) => (
              <div className="pd-feature" key={i}>
                <h4>{f.name}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Tech Stack */}
        <div className="pd-block">
          <h2 className="pd-h2">Tech Stack</h2>
          <div className="pd-tech-grid">
            {project.tech.map((t, i) => (
              <span className="pd-tech-tag" key={i}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 9. Architecture / Workflow */}
        {project.architecture && (
          <div className="pd-block">
            <h2 className="pd-h2">How It Works</h2>
            <div className="pd-workflow">
              {project.architecture.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="pd-workflow-step">
                    <span className="pd-workflow-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pd-workflow-label">{step}</span>
                  </div>
                  {i < project.architecture.length - 1 && (
                    <div className="pd-workflow-arrow">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* 10/12. Results / Outcomes */}
        <div className="pd-block">
          {project.results ? (
            <>
              <h2 className="pd-h2">Results</h2>
              <div className="pd-results">
                {Object.entries(project.results).map(([key, val]) => (
                  <div className="pd-result-item" key={key}>
                    <span className="pd-result-label">{key}</span>
                    <span className="pd-result-value">{val}</span>
                  </div>
                ))}
              </div>
            </>
          ) : project.outcomes ? (
            <>
              <h2 className="pd-h2">Key Outcomes</h2>
              <p className="pd-outcomes">{project.outcomes}</p>
            </>
          ) : null}
        </div>

        {/* 11. Engineering Decisions */}
        {project.engineering && (
          <div className="pd-block">
            <h2 className="pd-h2">Engineering Decisions</h2>
            <div className="pd-engineering">
              {project.engineering.map((e, i) => (
                <div className="pd-eng-item" key={i}>
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. Deployment */}
        {project.deployment && (
          <div className="pd-block">
            <h2 className="pd-h2">Deployment</h2>
            <p className="pd-outcomes">{project.deployment}</p>
          </div>
        )}

        {/* 13. CTA */}
        <div className="pd-cta-block">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex pd-cta-demo"
            >
              🚀 Live Demo
              <i className="bx bx-right-arrow-alt button__icon"></i>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex"
          >
            View on GitHub
            <i className="bx bxl-github button__icon"></i>
          </a>
        </div>

        {/* 14. Other Projects */}
        {otherProjects.length > 0 && (
          <div className="pd-others">
            <h2 className="pd-h2">Other Projects</h2>
            <div className="pd-others-grid">
              {otherProjects.map((item) => (
                <Link
                  to={`/project/${item.slug}`}
                  className="pd-other-card"
                  key={item.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <div className="pd-other-img-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="pd-other-body">
                    <span className="pd-other-cat">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p>{item.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
