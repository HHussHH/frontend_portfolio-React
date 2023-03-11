import Header from "../../components/header/Header";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section" style={{ overflow: "hidden" }}>
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <motion.h2
                animate={{
                  x: [-2000, 0],
                }}
                transition={{ duration: 1.8 }}
                className="title-2"
              >
                Frontend
              </motion.h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, Redux-toolkit, HTML,
                CSS, NPM, BootStrap,Axios, MaterialUI, Yarn, framer-motion,
                StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <motion.h2
                animate={{
                  x: [2000, 0],
                }}
                transition={{ duration: 1.8 }}
                className="title-2"
              >
                Backend
              </motion.h2>
              <p>NodeJS, MySQL, Firebase</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
