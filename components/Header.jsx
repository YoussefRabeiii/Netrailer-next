import Link from "next/link";
import { useEffect, useState } from "react";

import { hyphenize } from "@helpers";

// import Youtube from "react-youtube";
import { FaPlay, FaStop } from "react-icons/fa";

import styles from "../styles/Header.module.css";

const Header = ({ random }) => {
  // const [trailerKey, setTrailerKey] = useState(null);

  // useEffect(() => {
  //   console.log(`🔑: ${trailerKey}`);
  // }, [trailerKey]);

  const {
    id,
    name,
    type,
    videos,
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

      // Header Trailer
      {/* {trailerKey && (
        <div className={styles.header__trailer}>
          <Youtube
            videoId={trailerKey}
            onEnd={() => setTrailerKey(null)}
            onPause={() => setTrailerKey(null)}
            className={styles.header__trailer__video}
            opts={{
              // host: "https://netrailer.vercel.app",
              playerVars: {
                fs: 0, // Full Screen
                rel: 0, // Related Videos (will come from the same channel only)
                // mute: 1,
                loop: 0,
                autoplay: 1,
                controls: 0,
                disablekb: 1, // Disable Keyboard
                playsinline: 1,
                // enablejsapi: 1,
                modestbranding: 1, // Remove Youtube Logo (From the controls)
              },
            }}
          />
        </div>
      )} */}

      <div
        className={styles.header__content}
        // style={trailerKey ? { opacity: "50%" } : null}
      >
        <div className={styles.header__top}>
          <a href={homepage || ""} target="_blank">
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
              // onClick={() =>
              //   setTrailerKey(
              //     trailerKey
              //       ? null
              //       : videos?.find((video) => video.type === "Trailer").key
              //   )
              // }
            >
              <h2>
                <FaPlay className={styles.header__icons} />
                {/* {trailerKey ? (
                  <FaStop className={styles.header__icons} />
                ) : (
                  <FaPlay className={styles.header__icons} />
                )} */}

                {/* {trailerKey ? "Stop" : "Play"} */}
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
