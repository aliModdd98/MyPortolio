import { useState } from "react";
import logo from "./../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-4 z-50 flex justify-between items-center p-4 mx-2 bg-opacity-70 backdrop-blur-md shadow-md rounded-md md:px-8 px-4">
      {/* Logo */}
      <h1
        className="text-3xl font-bold p-1 max-w-62 flex justify-start items-center"
        style={{ fontFamily: "'Qwitcher Grypen', cursive" }}
      >
        <img src={logo} alt="logo" className="w-20" />
        Ali Mohammad
      </h1>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex justify-end flex-col items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-1 mb-1 bg-black transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-8 h-1 mb-1 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-8 h-1 bg-black transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Menu for small screens */}
      <nav
        className={`absolute top-full left-0 bg-white bg-opacity-70 backdrop-blur-md transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } w-full`}
      >
        <ul className="flex flex-col justify-center items-center space-y-4 py-4">
          {navList.map(({ name, path }) => (
            <li key={name} className="text-lg w-full text-center">
              <a
                href={path}
                className="block text-gray-800 hover:bg-primary p-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex flex-1 justify-evenly">
        <ul className="flex flex-row justify-evenly items-center w-full">
          {navList.map(({ name, path }) => (
            <li key={name} className="text-lg p-2">
              <a
                href={path}
                className="block text-gray-800 hover:bg-gray-300 p-2 rounded"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
