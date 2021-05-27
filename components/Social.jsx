import {
  FaDev,
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import styles from "../styles/Social.module.css";
const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a
          name="Youssefrabei"
          title="Youssefrabei"
          href="https://youssefrabei.netlify.app"
        >
          <FaGlobe className={styles.social__fa} />
        </a>
      </li>
      <li>
        <a
          name="Github"
          title="Github"
          href="https://github.com/youssefRabeiii"
        >
          <FaGithub className={styles.social__fa} />
        </a>
      </li>
      <li>
        <a
          name="Twitter"
          title="Twitter"
          href="https://twitter.com/youssefRabeiii"
        >
          <FaTwitter className={styles.social__fa} />
        </a>
      </li>
      <li>
        <a
          name="Instagram"
          title="Instagram"
          href="https://instagram.com/youssefRabeiii/"
        >
          <FaInstagram className={styles.social__fa} />
        </a>
      </li>
      <li>
        <a href="https://dev.to/youssefRabeiii" name="Dev" title="Dev">
          <FaDev className={styles.social__fa} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
