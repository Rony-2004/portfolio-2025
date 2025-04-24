import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Hackathon Achievements",
    company: "Various Platforms",
    date: "2022 - Present",
    responsibilities: [
      "Completed NPTEL courses in Python & Java.",
      "Finalist – ETH SEA Hackathon.",
      "MLH Qualifier & Rebase <01> Top 15.",
      "Smart India Hackathon Participant.",
      "Google Arcade Milestone Achiever.",
    ],
  },
  {
    job: "Co-Founder & Lead",
    company: "Codenest-OSSDC",
    date: "2024 - Present",
    responsibilities: [
      "Leading open-source student community.",
      "Organizing tech events & workshops.",
      "Building collaborative dev projects.",
    ],
  },
  {
    job: "Campus Ambassador",
    company: "Tripple One & Internshala",
    date: "2025 - Present",
    responsibilities: [
      "Promoting student opportunities.",
      "Hosting events & info sessions.",
      "Connecting peers with internships.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
