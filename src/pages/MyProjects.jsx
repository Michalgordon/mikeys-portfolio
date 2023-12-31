import { PROJECTS } from "../constants";
import { ProjectCard } from "../components";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <div className="flex flex-col justify-center flex-grow px-20 overflow-hidden">
      <motion.h2
        className="section-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        My Projects.
      </motion.h2>
      <motion.div
        className="flex justify-center gap-8 pt-24"
        initial={{ y: "200%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project}></ProjectCard>
        ))}
      </motion.div>
    </div>
  );
};

// When I first started at Paradox (formerly Spetz), I was put in charge
// of a small side project that turned out to be a big deal. I designed
// and developed a chrome extension using WhatsApp API that was
// downloaded by thousands of users, written about in Geektime Magazine
// and became a lead generating tool for the company. Not only was this
// the first project I was in charge of, it was my first project EVER
// outside of school. The experience proved to both me and the company
// that I can turn an idea into a product, learn as I code and solve
// problems on the go.

export default MyProjects;
