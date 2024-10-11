import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg w-64">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-2xl font-bold mb-2 px-2 text-center">
          {project.title}
        </h3>
        <p className="text-white text-center mb-4">{project.description}</p>

        {/* Icons for Demo and GitHub */}
        <div className="flex space-x-4">
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

      {/* Project Type and Title */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm mb-1 uppercase tracking-wide text-orange-400">
          {project.type}
        </p>
        <h4 className="text-lg font-semibold">{project.title}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
