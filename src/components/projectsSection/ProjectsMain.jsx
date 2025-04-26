import SingleProject from "./SingleProject";
import ProjectsText from "./ProjectsText";

const projects = [
  {
    image: "images/img1.jpg",
    name: "Netflix Clone",
    link: "https://github.com/Rony-2004/Netflix-clone",
  },
  {
    image: "images/t.png",
    name: "Speech Converter",
    link: "https://github.com/Rony-2004/Speech-Converter",
  },
  {
    image: "images/img3.jpg",
    name: "Tic Tac Toe",
    link: "https://github.com/Rony-2004/Tic-Tac",
  },
  {
    image: "images/img4.jpg",
    name: "Portfolio",
    link: "https://github.com/Rony-2004/",
  },
  {
    image: "images/l.jpg",
    name: "Lunatic AI",
    link: "https://github.com/Rony-2004/Lunatic-AI",
  },
  {
    image: "images/5.png",
    name: "Edu Empower",
    link: "https://edu-empower-rho.vercel.app/",
  },
  {
    image: "images/7.png",
    name: "Project KS",
    link: "https://github.com/Rony-2004/project-ks",
  },
  {
    image: "images/6.png",
    name: "Simfluence",
    link: "https://simfluence.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4">
      <ProjectsText />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            image={project.image}
            link={project.link}
            name={project.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsMain;
