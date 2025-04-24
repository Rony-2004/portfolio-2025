import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Mowazzem Uddin Ahmed (He/Him) — a passionate MERN Stack Developer and AI/ML Enthusiast, currently exploring GCP, Open Source, and building impactful web solutions.

💻 MERN Stack Developer

🚀 Co-Founder & Co-Lead @ Codenest-OSSDC

🌍 Campus Ambassador @ Tripple One & Internshala

🏫 Building @Project-KS

🔓 Open Source Contributor | Cloud Curious
<br />
<br />
___________________________________________________________________________________<br />
<h1>📘 Education</h1>

<br />
📖 Methodist School, Dankuni (2010 – 2022)<br />

🎓 NSHM Knowledge Campus, Durgapur (2022 – 2026)


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
