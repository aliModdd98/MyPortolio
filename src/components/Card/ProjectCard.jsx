import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Card.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="relative cardStyle group overflow-hidden rounded-lg shadow-lg w-64 lg:w-96 h-full flex flex-col cursor-pointer">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-100"
      />

      {/* Overlay that animates from bottom to top */}
      <div className="absolute inset-0 bg-black bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-xl font-bold mb-2 px-2 text-center">
          {project.title}
        </h3>
        <p className="text-white text-center text-wrap mb-4 px-2">
          {project.description}
        </p>
      </div>

      {/* Project Type and Title */}
      <div className="bg-black z-40 text-white p-4 flex justify-between items-center">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition-colors duration-300"
        >
          <FaExternalLinkAlt size={28} />
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400 transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
