import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Experiences from "./components/experiences/Experiences";
import Certificates from "./components/certificates/Certificates";
import Work from "./components/work/Work";
import ProjectPage from "./components/work/ProjectPage";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const HomePage = () => (
  <>
    <Home />
    <About />
    <Experiences />
    <Skills />
    <Services />
    <Certificates />
    <Work />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
