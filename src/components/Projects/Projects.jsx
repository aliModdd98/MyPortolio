import ProjectCard from "../Card/ProjectCard";
import UnderlinedText from "../HeadLine/HeadLine";
import projects from "./../../data/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="md:px-4 px-2 p-4 flex space-y-8 justify-center items-center flex-col py-8"
    >
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          My Projects
        </h1>
      </UnderlinedText>
      <div className="flex justify-center md:justify-between items-center flex-wrap md:gap-4 gap-8 mt-8 px-12">
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
