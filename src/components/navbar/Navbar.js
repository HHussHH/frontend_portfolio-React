import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.scss";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  const btnAnim = {
    init: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  const linkData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contacts",
      link: "/contacts",
    },
  ];
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <motion.div
              animate={{
                y: [-100, 0],
              }}
              transition={{
                duration: 1,
              }}
            >
              <strong>Frontend</strong> portfolio
            </motion.div>
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            {linkData.map(({ title, link }, id) => (
              <motion.li
                variants={btnAnim}
                animate="end"
                initial="init"
                className="nav-list__item"
                key={id}
              >
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
