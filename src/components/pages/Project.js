import { useParams } from "react-router-dom";
import BtnGitHub from "../btnGit/BtnGitHub";
import { projects } from "../helpers/projectsCardList";
import { motion } from "framer-motion";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <motion.h1
            animate={{ scale: [0, 1] }}
            transition={{ duration: 1 }}
            className="title-1"
          >
            {project.title}
          </motion.h1>
          <motion.img
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 1 }}
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="project-details__desc"
            style={{ cursor: "pointer" }}
          >
            <p>Skills: {project.skills}</p>
          </motion.div>

          {project.gitHubLink ? <BtnGitHub link={project.gitHubLink} /> : null}
          {project.cite ? (
            <a
              href={project.cite}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ marginTop: "20px" }}
            >
              <strong>Посмотреть демо</strong>
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Project;
