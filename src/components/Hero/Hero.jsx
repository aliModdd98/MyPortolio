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

  const texts = ["Front-end Developer", "Mobile Apps Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation for text
  useEffect(() => {
    if (charIndex < texts[currentTextIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const delayBeforeNext = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 1000);
      return () => clearTimeout(delayBeforeNext);
    }
  }, [charIndex, texts, currentTextIndex]);

  // Animation for text
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  // Animation for image
  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 150, friction: 25 },
    delay: 400,
  });

  // Scroll detection for "back to top" button
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

  // Animation for "back to top" arrow
  const arrowSpring = useSpring({
    opacity: isScrolledPast ? 1 : 0,
    transform: isScrolledPast ? "translateY(0)" : "translateY(100px)",
    config: { tension: 250, friction: 20 },
  });

  // Icon circular animation
  // const radius = 180; // Circle radius of 180px
  // const icons = [
  //   { Icon: FaReact, color: "text-blue-500", duration: 5000 },
  //   { Icon: FaHtml5, color: "text-orange-500", duration: 4000 },
  //   { Icon: FaCss3Alt, color: "text-blue-600", duration: 6000 },
  //   { Icon: FaJsSquare, color: "text-yellow-500", duration: 7000 },
  // ];

  // const iconSpring = (index) => {
  //   const angleOffset = (index / icons.length) * 2 * Math.PI; // Evenly space icons around the circle
  //   return useSpring({
  //     loop: true,
  //     to: async (next) => {
  //       while (true) {
  //         for (let t = 0; t < 360; t += 1) {
  //           const angle = (t * Math.PI) / 180; // Convert degrees to radians
  //           const x = radius * Math.cos(angle + angleOffset); // X position based on angle
  //           const y = radius * Math.sin(angle + angleOffset); // Y position based on angle
  //           await next({ transform: `translate(${x}px, ${y}px)` });
  //         }
  //       }
  //     },
  //     config: { duration: icons[index].duration, precision: 0.1 },
  //   });
  // };

  return (
    <div id="hero-section" className="relative">
      <div className="md:px-4 px-2 w-full flex space-y-8 md:space-y-0 md:flex-row flex-col justify-center md:justify-between flex-1 py-8">
        <animated.div
          style={textSpring}
          className="md:w-1/2 w-full p-6 md:p-8 flex justify-center items-start flex-col"
        >
          <h1 className="text-[25px] md:text-[30px] text-primary">
            Hello, I’m
          </h1>
          <h1
            className="text-[35px] md:text-[60px] font-bold"
            style={{ letterSpacing: "4px" }}
          >
            Ali Hamza <br /> Mohammad
          </h1>
          <div
            className="text-[25px] md:text-[30px] text-primary"
            style={{ minHeight: "40px", minWidth: "250px" }}
          >
            <animated.h1 className="inline-block">{displayedText}</animated.h1>
          </div>
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

        <animated.div
          style={imageSpring}
          className="md:w-1/2 w-full flex justify-center items-center relative mt-10 md:mt-0"
        >
          <div className="w-64 md:w-96 z-[90] h-52 md:h-72 bg-primary absolute left-[50%] translate-x-[-50%] bottom-0 rounded-tl-full rounded-tr-full"></div>
          <img
            src={img1}
            className="w-56 md:w-80 z-[100] h-auto max-w-md md:max-w-full object-cover rounded-md absolute bottom-0"
            alt="Hero"
          />

          {/* Icons Flying in a Circle */}
          {/* <div className="absolute top-[150px] left-[50%] transform translate-x-[-50%]">
            {icons.map((item, index) => {
              const springStyle = iconSpring(index);
              return (
                <animated.div
                  key={index}
                  style={springStyle}
                  className={`absolute ${item.color}`}
                >
                  <item.Icon className="w-8 h-8" />
                </animated.div>
              );
            })}
          </div> */}
        </animated.div>
      </div>

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
