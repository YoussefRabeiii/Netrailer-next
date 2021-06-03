import Head from "next/head";

import { Header } from "@components";
import { swiftClient, trendingQuery } from "@graphQL";
import { formatGQL, compareByPopularity, getRandom } from "@helpers";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  // Get 20 Trending Movies/Tv
  const { movies, series } = await swiftClient.request(trendingQuery(15));

  // Format the data (DeStructure)
  const formatedMovies = await formatGQL(movies.trending);
  const formatedSeries = await formatGQL(series.trending);

  // Combine all of the Movies and Series
  const allTrending = [...formatedMovies, ...formatedSeries];

  // Sort the array by popularity
  const trending = allTrending.sort(compareByPopularity);

  // Pick one random Movies/Tv
  const random = getRandom(trending);

  return {
    props: { random },
    revalidate: 60, // Seconds // For ISR
  };
};

const Home = ({ random }) => {
  console.log(random);

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
