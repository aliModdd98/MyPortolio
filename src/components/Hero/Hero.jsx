import { useSpring, animated } from "@react-spring/web";
import img1 from "./../../assets/img1.jpg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";
const Hero = () => {
  const texts = ["Front-end Developer ", "Mobile Apps Developer "];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Handle text animation
    if (charIndex < texts[currentTextIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Speed of character display
      return () => clearTimeout(timeoutId);
    } else {
      // Reset after one text is completed
      const delayBeforeNext = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop between texts
      }, 1000); // Delay before showing the next text
      return () => clearTimeout(delayBeforeNext);
    }
  }, [charIndex, texts, currentTextIndex]);

  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  // Animation for image section
  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
    delay: 400,
  });

  return (
    <div className="md:px-4 px-2 w-full  flex space-y-8 md:space-y-0 md:flex-row flex-col justify-center md:justify-between flex-1 py-8">
      {/* Text Section */}
      <animated.div
        style={textSpring}
        className="md:w-1/2 w-full p-4 flex justify-center items-start flex-col"
      >
        <h1 className="text-[25px] md:text-[30px] text-primary">Hello, I’m</h1>
        <h1
          className="text-[40px]  md:text-[60px] font-bold"
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
          <BiSolidQuoteAltRight className="w-8 h-8 text-primary absolute right-0 top-3  " />
        </h2>
        {/* <p className="text-md text-gray-500 text-center mt-2">
            "Crafting seamless user experiences, one line of code at a time."
          </p> */}

        {/* <p className="text-md text-gray-500 mt-2">
          "Check out my portfolio to see my latest projects."
        </p> */}
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">
          Let&lsquo;s Connect
        </button>
      </animated.div>

      {/* Image Section */}
      <animated.div
        style={imageSpring}
        className="md:w-1/2 w-full flex justify-center items-center"
      >
        <img
          src={img1}
          className="w-2/3 h-auto max-w-md md:max-w-full object-cover rounded-md"
          alt="Hero"
        />
      </animated.div>
    </div>
  );
};

export default Hero;
