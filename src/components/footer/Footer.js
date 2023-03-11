import { BsTelegram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://vk.com/top_sportorg"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialVkontakte size={40} color="#fff" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://t.me/MustafaevN"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram size={40} color="#fff" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://github.com/HHussHH"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={40} color="#fff" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
