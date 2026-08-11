import React from "react";
import "./stack.css";

const stackData = [
  {
    name: "Python",
    icon: "🐍",
    description:
      "My primary language for data analysis, machine learning, and automation. I use it daily for building models, processing data, and creating end-to-end solutions.",
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    description:
      "Played a key role in my machine learning journey through Bangkit Academy. I used it to develop recommendation systems, image classification models, and deep learning workflows.",
  },
  {
    name: "SQL",
    icon: "🗄️",
    description:
      "Enables me to efficiently manage and explore relational databases. I use it to perform joins, aggregations, and data transformations for analysis-ready data.",
  },
  {
    name: "Pandas",
    icon: "🐼",
    description:
      "My go-to library for data manipulation and analysis. I use it to clean, transform, and organize datasets for machine learning and reporting tasks.",
  },
  {
    name: "NumPy",
    icon: "🔢",
    description:
      "My preferred library for numerical computing and array operations. Essential for mathematical calculations and efficient ML workflows.",
  },
  {
    name: "PyTorch",
    icon: "🔥",
    description:
      "Expanding my deep learning toolkit with PyTorch for flexible model development and experimentation with cutting-edge architectures.",
  },
  {
    name: "Docker",
    icon: "🐳",
    description:
      "Containerization for reproducible ML environments. I use Docker to package applications with their dependencies for consistent deployment.",
  },
  {
    name: "Git",
    icon: "🌿",
    description:
      "Helps me maintain a structured development process by tracking modifications, managing branches, and ensuring organized code changes.",
  },
  {
    name: "Power BI",
    icon: "📊",
    description:
      "Creating interactive dashboards and visual reports to communicate data-driven insights effectively to stakeholders.",
  },
];

const Stack = () => {
  return (
    <section className="stack section" id="skills">
      <h2 className="section__title">My Stack</h2>
      <span className="section__subtitle">Technologies I work with</span>

      <div className="stack__container container grid">
        {stackData.map((item, index) => (
          <div className="stack__card" key={index}>
            <span className="stack__icon">{item.icon}</span>
            <h3 className="stack__name">{item.name}</h3>
            <p className="stack__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
