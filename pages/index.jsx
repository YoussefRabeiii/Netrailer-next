import Head from "next/head";

import { Header } from "@components";
import { formatGQL, getRandom } from "@helpers";
import { swiftClient, jsClient, trendingQuery } from "@graphQL";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  // Get 20 Trending Movies/Tv
  const data = await jsClient.request(trendingQuery());
  const { movies, series } = data;

  // Add the type field to every movie
  // const typedMovies = movies.map((movie) => {
  //   return {
  //     ...movie,
  //     type: "Movie",
  //   };
  // });

  // Add the type field to every series
  const typedSeries = series.map((series) => {
    return {
      ...series,
      type: "Series",
    };
  });

  // Combine all of the Movies and Series
  const allTrending = [...movies, ...typedSeries];

  // The comparison meter
  const compare = (a, b) => {
    const popularityA = a.popularity;
    const popularityB = b.popularity;

    let comparison = 0;
    if (popularityA > popularityB) {
      comparison = 1;
    } else if (popularityA < popularityB) {
      comparison = -1;
    }

    // The times -1 to be in desc. order
    return comparison * -1;
  };

  // Sort the array by popularity
  const trending = allTrending.sort(compare);

  // Pick one random Movies/Tv
  const random = getRandom(trending);

  return {
    props: { random },
    revalidate: 60, // Seconds // For ISR
  };
};

const Home = ({ random }) => {
  console.table(random);

  return (
    <main className={styles.home}>
      <Head>
        <title>Netrailer</title>
      </Head>

      <Header random={random} />

      <h1>Home</h1>
    </main>
  );
};

export default Home;
