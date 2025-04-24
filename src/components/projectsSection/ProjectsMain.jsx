import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Netflix Clone",
    year: "2022",
    align: "right",
    image: "../../public/images/img1.jpg",
    link: "https://github.com/Rony-2004/Netflix-clone",
  },
  {
    name: "Text to Speech Converter",
    year: "2023",
    align: "left",
    image: "../../public/images/t.png",
    link: "https://github.com/Rony-2004/Speech-Converter",
  },
  {
    name: "Tic Tac Toe",
    year: "2023",
    align: "right",
    image: "../../public/images/img3.jpg",
    link: "https://github.com/Rony-2004/Tic-Tac",
  },
  {
    name: "Spotify Clone",
    year: "2023",
    align: "left",
    image: "../../public/images/img4.jpg",
    link: "https://github.com/Rony-2004/",
  },
  {
    name: "Real Time Chat App",
    year: "2024",
    align: "right",
    image: "../../public/images/l.jpg",
    link: "https://github.com/Rony-2004/Lunatic-AI",
  },
  {
    name: "Edu-Empower",
    year: "2025",
    align: "left",
    image: "../../public/images/5.png",
    link: "https://edu-empower-rho.vercel.app/",
  },
  {
    name: "Project-KS",
    year: "2025",
    align: "right",
    image: "../../public/images/7.png",
    link: "https://github.com/Rony-2004/project-ks",
  },
  {
    name: "Sim-Fluence",
    year: "2025",
    align: "left",
    image: "../../public/images/6.png",
    link: "https://simfluence.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
