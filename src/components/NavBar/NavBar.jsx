import { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";

const NavBar = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navList = [
    { name: "Home", ref: refs.heroRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Projects", ref: refs.projectsRef },
    { name: "Resume", ref: refs.resumeRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref, name) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(name);
      setIsOpen(false); // Close menu after clicking a section
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      navList.forEach(({ name, ref }) => {
        if (ref && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navList]);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-bgColor bg-opacity-70 backdrop-blur-md shadow-md rounded-md md:px-8 px-4">
      {/* Logo */}
      <h1
        className="text-3xl font-bold p-1 max-w-62 flex justify-start items-center text-primary"
        style={{ fontFamily: "'Qwitcher Grypen', cursive" }}
      >
        <img src={logo} alt="logo" className="w-16" />
        Ali Mohammad
      </h1>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex justify-end flex-col items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-1 mb-1 bg-white transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-8 h-1 mb-1 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Menu for small screens */}
      <nav
        className={`absolute top-16 left-0 w-full   bg-bgColor bg-opacity-90 backdrop-blur-md transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 mt-3"
            : "translate-y-[200%] opacity-0"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-4 py-8 h-auto">
          {navList.map(({ name, ref }) => (
            <li
              key={name}
              className="text-lg w-full text-center flex justify-center items-center
                "
            >
              <button
                onClick={() => scrollToSection(ref, name)}
                className={`flex justify-center w-full text-center  mx-4 text-gray-800 p-2 rounded  hover:px-4 
                  hover:bg-primary/80  ${
                    activeSection === name ? "bg-primary text-white px-4" : ""
                  }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex flex-1 justify-evenly">
        <ul className="flex flex-row justify-evenly items-center w-full">
          {navList.map(({ name, ref }) => (
            <li key={name} className="text-lg p-2">
              <button
                onClick={() => scrollToSection(ref, name)}
                className={`block text-gray-800 p-2 rounded ${
                  activeSection === name ? "bg-primary text-white" : ""
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
