import React from "react";
import { Link } from "react-router-dom";

const WorksItem = ({ item }) => {
  return (
    <Link to={`/project/${item.slug}`} className="work__card">
      <div className="work__img-wrapper">
        <img src={item.image} alt={item.title} className="work__img" />
      </div>
      <div className="work__body">
        <span className="work__category">{item.category}</span>
        <h3 className="work__title">{item.title}</h3>
        <p className="work__desc">{item.tagline}</p>
        <div className="work__tech-stack">
          {item.tech.slice(0, 4).map((t, i) => (
            <span className="work__tech-tag" key={i}>
              {t}
            </span>
          ))}
          {item.tech.length > 4 && (
            <span className="work__tech-tag work__tech-more">+{item.tech.length - 4}</span>
          )}
        </div>
        <span className="work__cta">
          View Project <i className="bx bx-right-arrow-alt work__cta-icon"></i>
        </span>
      </div>
    </Link>
  );
};

export default WorksItem;
