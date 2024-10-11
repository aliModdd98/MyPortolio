import UnderlinedText from "../HeadLine/HeadLine";

const Resume = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      {/* Section Title */}
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          Resume
        </h1>
      </UnderlinedText>

      {/* Main Content */}
      <div className="flex flex-wrap justify-between w-full max-w-6xl px-8 mt-8">
        {/* Left Section: Certifications and Experience */}
        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Certifications & Experience
          </h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Front-End Development (React.js)</li>
            <li>Mobile Development (React Native)</li>

            <li>Certification in Informatics Engineering</li>
            <li>Studying Master Degree in Web Science</li>
          </ul>
        </div>

        {/* Right Section: Overview and Download Button */}
        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Here is a brief overview of my skills, experience, and education.
            Download my CV to get more detailed information.
          </p>

          {/* Download Button */}
          <div className="flex justify-center">
            <a
              href="/Ali_Mohammad_cv.pdf"
              download="Ali_Mohammad_cv.pdf"
              className="bg-primary hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
