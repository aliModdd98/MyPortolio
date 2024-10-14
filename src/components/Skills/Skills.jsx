import UnderlinedText from "../HeadLine/HeadLine";
import SkillCard from "../SkillCard/SkillCard";
import { IoLogoHtml5 } from "react-icons/io";
import { FaJs } from "react-icons/fa6";
import { FaReact, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiReactquery,
  SiTypescript,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <IoLogoHtml5 size={26} className="text-white" /> },
    { name: "JavaScript", icon: <FaJs size={26} className="text-white" /> },
    { name: "React", icon: <FaReact size={26} className="text-white" /> },
    { name: "CSS", icon: <FaCss3Alt size={26} className="text-white" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={26} className="text-white" />,
    },
    { name: "MUI", icon: <SiMui size={26} className="text-white" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={26} className="text-white" />,
    },
    { name: "Git", icon: <FaGitAlt size={26} className="text-white" /> },
    {
      name: "redux Toolkit",
      icon: <SiRedux size={26} className="text-white" />,
    },
    {
      name: "react Query",
      icon: <SiReactquery size={26} className="text-white" />,
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative size={26} className="text-white" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={26} className="text-white" />,
    },
    {
      name: "Styled Component",
      icon: <SiStyledcomponents size={28} className="text-white" />,
    },
  ];
  return (
    <div className="md:px-4 px-2 w-full  flex space-y-8 md:space-y-0  flex-col justify-center items-center flex-1">
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          My Skills
        </h1>
      </UnderlinedText>
      <div className="flex flex-col items-center py-12 bg-gray-100">
        <div className="flex justify-evenly flex-wrap gap-4 md:gap-6 w-full  px-6 md:px-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
