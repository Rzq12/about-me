import React from "react";
import "./experiences.css";

const experiencesData = [
  {
    number: "01",
    title: "AI Engineer",
    company: "Coding Camp",
    period: "Feb 2026 - Jun 2026",
    description:
      "Mengembangkan solusi AI menggunakan machine learning dan deep learning, dengan pengalaman dalam pengembangan aplikasi AI, integrasi model, serta implementasi dan deployment solusi berbasis AI.",
  },
  {
    number: "02",
    title: "Machine Learning Engineer",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    period: "Sep 2024 - Jan 2025",
    description:
      "Mengembangkan solusi machine learning melalui berbagai proyek praktis, mulai dari pengolahan data, pengembangan dan evaluasi model, hingga implementasi menggunakan Python dan TensorFlow.",
  },
  {
    number: "03",
    title: "Finance Division Intern",
    company: "Dinas Perumahan Rakyat & Kawasan Permukiman, Kota Surabaya",
    period: "Jun 2024 - Jul 2024",
    description:
      "Menganalisis data realisasi pendapatan dinas untuk mengidentifikasi tren, pencapaian target, dan deviasi dari rencana anggaran menggunakan Microsoft Excel.",
  },
];

const Experiences = () => {
  return (
    <section className="experiences section" id="experiences">
      <h2 className="section__title">Experiences</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="experiences__container container">
        {experiencesData.map((exp, index) => (
          <div className="experiences__item" key={index}>
            <div className="experiences__number">{exp.number}</div>
            <div className="experiences__content">
              <h3 className="experiences__title">{exp.title}</h3>
              <span className="experiences__company">{exp.company}</span>
              <span className="experiences__period">{exp.period}</span>
              <p className="experiences__description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
