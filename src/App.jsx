import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Mouse from "./components/Mouse/Mouse";
import NavBar from "./components/NavBar/NavBar";

import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Mouse />
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
