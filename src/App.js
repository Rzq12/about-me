import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Certificates from "./components/certificates/Certificates";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Certificates />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
