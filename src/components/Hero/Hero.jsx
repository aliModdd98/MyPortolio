import { useSpring, animated } from "@react-spring/web";
import img1 from "./../../assets/img1.png";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import {
  FaArrowUp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  // Spring animations for pulsing and floating icons
  const pulseAndFloatSpring = useSpring({
    loop: { reverse: true }, // Create an infinite loop
    to: [
      { transform: "translateY(-10px) scale(1.2)" },
      { transform: "translateY(0px) scale(1)" },
    ],
    from: { transform: "translateY(0px) scale(1)" },
    config: { duration: 1500 }, // Control the speed of the animation
  });

  // Handle scroll past event for showing the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight ||
        window.innerHeight;
      setIsScrolledPast(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Spring animation for the scroll-to-top arrow with a smoother transition
  const arrowSpring = useSpring({
    opacity: isScrolledPast ? 1 : 0,
    transform: isScrolledPast ? "translateY(0)" : "translateY(20px)",
    config: { tension: 210, friction: 20 },
  });

  return (
    <div id="hero-section">
      <div className="md:px-4 px-2 w-full flex space-y-8 md:space-y-0 md:flex-row flex-col justify-center md:justify-between flex-wrap h-full flex-1 py-8">
        {/* Text Section */}
        <animated.div className="md:w-1/2 w-full p-6 md:p-8 flex justify-center items-start flex-col">
          <h1 className="text-[25px] md:text-[30px] text-primary">
            Hello, I’m
          </h1>
          <h1
            className="text-[35px] md:text-[60px] font-bold"
            style={{ letterSpacing: "4px" }}
          >
            Ali Hamza <br /> Mohammad
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-center flex items-center my-8 relative">
            <BiSolidQuoteAltLeft className="w-8 h-8 text-primary absolute left-0 -top-3" />
            <span
              className="mx-4 px-4 text-gray-700"
              style={{ letterSpacing: "3px" }}
            >
              Transforming Ideas into Digital Reality
            </span>
            <BiSolidQuoteAltRight className="w-8 h-8 text-primary absolute right-0 top-3" />
          </h2>
          <button
            onClick={() => scrollToTop("connect-section")}
            className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
          >
            Let&lsquo;s Connect
          </button>
        </animated.div>

        {/* Image Section with Animated Icons */}
        <animated.div className="md:w-1/2 w-full flex justify-evenly flex-col items-center relative mt-10 md:mt-0">
          <div className="flex justify-between items-center w-56 md:w-80 mb-16 md:mb-2">
            <animated.div style={pulseAndFloatSpring}>
              <FaReact className=" text-blue-500 text-3xl " />
            </animated.div>
            <animated.div style={pulseAndFloatSpring}>
              <FaHtml5 className=" text-orange-500 text-3xl " />
            </animated.div>
            <animated.div style={pulseAndFloatSpring}>
              <FaCss3Alt className=" text-blue-700 text-3xl " />
            </animated.div>
            <animated.div style={pulseAndFloatSpring}>
              <FaJsSquare className=" text-yellow-500 text-3xl " />
            </animated.div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-primary p-2 flex justify-center items-center relative">
              <img
                src={img1}
                className="rounded-full w-full h-full object-cover"
                alt="Hero"
              />
            </div>
          </div>
        </animated.div>
      </div>

      {/* Scroll to top arrow */}
      <animated.div
        style={arrowSpring}
        className="fixed bottom-8 right-6 z-[9999]"
      >
        <button
          onClick={scrollToTop}
          className="bg-primary p-4 rounded-full text-white shadow-lg hover:bg-orange-600 transition z-[99999]"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      </animated.div>
    </div>
  );
};

export default Hero;
