import SingleSkill from "./SingleSkill";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: SiTailwindcss },
  { skill: "Figma", icon: SiFigma },
  { skill: "Photoshop", icon: SiAdobephotoshop },
  { skill: "Canva", icon: SiCanva },
  { skill: "Linux", icon: FaLinux },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Docker", icon: FaDocker },
  {
    skill: "Edius",
    icon: () => (
      <div className="text-xl font-bold bg-gray-300 text-black px-2 py-1 rounded">
        E
      </div>
    ),
  },
];

const AllSkills = () => {
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6 w-max animate-slide"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...skills, ...skills].map((item, index) => (
          <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </motion.div>
    </div>
  );
};

export default AllSkills;
