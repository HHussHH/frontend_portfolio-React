import { motion } from "framer-motion";

const Contacts = () => {
  const titleAnim = {
    start: {
      x: -2000,
    },
    end: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textAnim = {
    start: {
      x: 2000,
    },
    end: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <main className="section" style={{ overflow: "hidden" }}>
      <div className="container">
        <motion.h1
          animate={{ y: [-600, 0] }}
          transition={{ duration: 1.2 }}
          className="title-1"
        >
          Contacts
        </motion.h1>

        <ul className="content-list">
          <li className="content-list__item">
            <motion.h2
              variants={titleAnim}
              animate="end"
              initial="start"
              className="title-2"
            >
              Location
            </motion.h2>
            <motion.p variants={textAnim} animate="end" initial="start">
              Moscow, Russia
            </motion.p>
          </li>
          <li className="content-list__item">
            <motion.h2
              variants={titleAnim}
              animate="end"
              initial="start"
              className="title-2"
            >
              Telegram / WhatsApp
            </motion.h2>
            <motion.p variants={textAnim} animate="end" initial="start">
              <a href="tel:+79263352723">+7 (926) 335-27-23</a>
            </motion.p>
          </li>
          <li className="content-list__item">
            <motion.h2
              variants={titleAnim}
              animate="end"
              initial="start"
              className="title-2"
            >
              Email
            </motion.h2>
            <motion.p variants={textAnim} animate="end" initial="start">
              <a href="mailto:webdev@protonmail.com">abonent26pg@mail.ru</a>
            </motion.p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
