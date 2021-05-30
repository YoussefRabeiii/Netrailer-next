import styles from "../styles/Header.module.css";

const Header = ({ random }) => {
  const {
    id,
    name,
    type,
    videos,
    poster,
    tagline,
    overview,
    backdrop,
    popularity,
  } = random;

  return (
    <header
      style={{ backgroundImage: `url(${backdrop.large})` }}
      className={styles.header}
    >
      {/*
        <div className="header__nav">
          <VerticalNav />
        </div>
      */}

      <div className={styles.header__content}>
        <div className={styles.header__top}>
          <div
            className={styles.header__continue}
            // onClick={(e) => onHeader(randomCover.isSeries, randomCover.id)}
          >
            {/* <FaPlay className="fa header__icons" /> */}
            <h2>Continue Watching</h2>
            <h3>{name}</h3>
          </div>
        </div>

        <div className={styles.header__center}>
          <div className={styles.header__type}>
            <h2>{type}</h2>
          </div>

          <h1 className={styles.header__title}>{name}</h1>

          <h3 className={styles.header__description}>
            {overview.slice(0, 300) + "..."}
          </h3>

          <div className={styles.header__watchLinks}>
            <div
              className={(styles.header__watchLink, styles.header__watchLink_1)}
              // onClick={(e) => onHeader(randomCover.isSeries, randomCover.id)}
            >
              <h2>
                {/* <FaPlay className="fa header__icons" /> */}
                Play
              </h2>
            </div>
            <div
              className={(styles.header__watchLink, styles.header__watchLink_2)}
            >
              <h2>More info</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
