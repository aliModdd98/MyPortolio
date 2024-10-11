import ProjectCard from "../Card/ProjectCard";
import UnderlinedText from "../HeadLine/HeadLine";
import projects from "./../../data/projects";
const Projects = () => {
  //   const project = [
  //     {
  //       image: "https://via.placeholder.com/400x250", // Replace with actual image
  //       title: "Portfolio Website",
  //       description: "A portfolio showcasing my web development projects.",
  //       demoLink: "https://portfolio-demo.com",
  //       githubLink: "https://github.com/username/portfolio",
  //       type: "Web Development",
  //     },
  //     {
  //       image: "https://via.placeholder.com/400x250", // Replace with actual image
  //       title: "Portfolio Website",
  //       description: "A portfolio showcasing my web development projects.",
  //       demoLink: "https://portfolio-demo.com",
  //       githubLink: "https://github.com/username/portfolio",
  //       type: "Web Development",
  //     },
  //   ];
  return (
    <div className="md:px-4 px-2 p-4  flex space-y-8 justify-center items-center flex-col py-8">
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          Our Projects
        </h1>
      </UnderlinedText>
      <div className="flex justify-center  items-center flex-wrap md:gap-4 gap-y-8 mt-8 px-4">
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
