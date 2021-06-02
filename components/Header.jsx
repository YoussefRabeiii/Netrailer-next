import { hyphenize } from "@helpers";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

import styles from "../styles/Header.module.css";

const Header = ({ random }) => {
  const {
    id,
    name,
    type,
    // videos,
    // poster,
    homepage,
    backdrop,
    // networks,
    overview,
    // popularity,
    // externalIds,
    // productionCompanies,
  } = random;

  return (
    <header
      style={{ backgroundImage: `url(${backdrop})` }}
      className={styles.header}
    >
      {/*
        <div className="header__nav">
          <VerticalNav />
        </div>
      */}

      <div className={styles.header__content}>
        <div className={styles.header__top}>
          <a href={homepage}>
            <div className={styles.header__continue}>
              <FaPlay className={styles.header__icons} />
              <h2>Continue Watching</h2>
              <h3>{name}</h3>
            </div>
          </a>
        </div>

        <div className={styles.header__center}>
          <div className={styles.header__type}>
            <h2>{type === "TVShow" ? "Series" : "Movie"}</h2>
          </div>

          <h1 className={styles.header__title}>{name}</h1>

          <h3 className={styles.header__description}>
            {overview.slice(0, 300) + "..."}
          </h3>

          <div className={styles.header__watchLinks}>
            <div
              className={styles.header__watchLink}
              // onClick={(e) => onHeader(randomCover.isSeries, randomCover.id)}
            >
              <h2>
                <FaPlay className={styles.header__icons} />
                Play
              </h2>
            </div>
            <div className={styles.header__watchLink}>
              <h2>
                <Link
                  href={`/${
                    type === "TVShow" ? "series" : "movies"
                  }/${hyphenize(name)}-${id}`}
                >
                  More info
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
