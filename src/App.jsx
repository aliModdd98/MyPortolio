import { useRef } from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { Contact } from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <NavBar
        refs={{
          heroRef,
          aboutRef,
          skillsRef,
          projectsRef,
          resumeRef,
          contactRef,
        }}
      />
      {/* Each section is now associated with a ref */}
      <section ref={heroRef}>
        <Hero />
      </section>
      <section ref={aboutRef}>
        <AboutMe />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={resumeRef}>
        <Resume />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}

export default App;
