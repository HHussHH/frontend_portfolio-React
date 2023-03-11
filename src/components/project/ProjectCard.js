import { NavLink } from "react-router-dom";
import "./style.scss";
import { motion } from "framer-motion";

const ProjectCard = ({ title, img, id }) => {
  const cardAnim = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleAnim = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <NavLink to={`/project/${id}`}>
      <motion.li
        variants={cardAnim}
        initial="start"
        animate="end"
        className="project"
      >
        <img src={img} alt={title} className="project__img" />
        <motion.h3 variants={titleAnim} className="project__title">
          {title}
        </motion.h3>
      </motion.li>
    </NavLink>
  );
};

export default ProjectCard;
