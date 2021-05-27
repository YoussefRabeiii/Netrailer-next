import Link from "next/link";

import { Social } from "./index";

import { FaCode, FaRegHeart, FaCoffee } from "react-icons/fa";

import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <h1 className={styles.footer__logo}>NeTrailer</h1>
      </Link>

      <h1>Find Me On</h1>
      <Social />

      <h5>
        <FaCode className={styles.footer__icons} title="Made" /> with{" "}
        <FaRegHeart className={styles.footer__icons} title="Love" /> and{" "}
        <FaCoffee className={styles.footer__icons} title="Coffee" /> by{" "}
        <a href="https://youssefrabei.netlify.app">
          <i>Youssef Rabei</i>
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
