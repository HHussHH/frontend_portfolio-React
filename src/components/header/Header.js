import "./style.scss";
import { motion } from "framer-motion";
const Header = () => {
  const titleAnimVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const buttonAnimVariant = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const textAnim = {
    init: {
      scale: 0,
      opacity: 0,
    },
    end: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <motion.h1
          className="header__title"
          variants={titleAnimVariant}
          animate="visible"
          initial="hidden"
        >
          <strong>
            Hi, my name is <em>Nariman</em>
          </strong>
          <br />a frontend developer
        </motion.h1>
        <motion.div
          className="header__text"
          variants={textAnim}
          animate="end"
          initial="init"
        >
          <p>with passion for learning and creating.</p>
        </motion.div>
        <motion.a
          href="./resume.pdf"
          download="resume.pdf"
          className="btn"
          variants={buttonAnimVariant}
          animate="end"
          initial="start"
        >
          Download CV
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
