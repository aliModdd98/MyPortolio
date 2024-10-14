import UnderlinedText from "../HeadLine/HeadLine";
import img1 from "./../../assets/img1.jpg";
const AboutMe = () => {
  return (
    <div
      id="about-section"
      className="md:px-8 px-6 p-6 flex space-y-8 justify-between items-center flex-col py-8"
    >
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          About Me
        </h1>
      </UnderlinedText>
      <div className="flex flex-col-reverse md:flex-row justify-between md:gap-0 gap-y-8 items-center mt-4 ">
        <div className="md:w-1/2 w-full h-full flex-col flex justify-center items-center">
          <img
            src={img1}
            className="w-2/3 h-auto max-w-md md:max-w-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 w-full flex justify-start items-start h-full flex-col px-4 ">
          <h1 className="text-3xl text-primary font-bold mb-4">
            Hi there! i’m Ali Mohammad
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I am a passionate front-end developer with a background in
            <strong> Informatics Engineering</strong> and currently pursuing a
            <strong> Master’s degree in Web Science</strong>. With hands-on
            experience working on projects in <strong>Saudi Arabia</strong> and{" "}
            <strong>Qatar</strong>, I specialize in creating user-friendly web
            applications that bring ideas to life.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            I am certified in advanced frontend development from
            <strong> Focal X</strong>, with expertise in technologies such as
            <strong> React.js</strong>, <strong>JavaScript</strong>,{" "}
            <strong>HTML/CSS</strong>, and modern front-end tools. My goal is to
            constantly innovate and build experiences that delight users.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            As I continue to evolve my skills through ongoing learning, I am
            excited to take on new challenges and collaborate on impactful
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
