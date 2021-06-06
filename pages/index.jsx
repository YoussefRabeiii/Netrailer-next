import Head from "next/head";

import { Header, GenreRow } from "@components";
import { swiftClient, trendingQuery } from "@graphQL";
import { formatGQL, compareByPopularity, getRandom } from "@helpers";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  // Get 20 Trending Movies/Tv
  const fetchTrending = await swiftClient.request(trendingQuery());

  // Format the data (DeStructure)
  const trendingMovies = await formatGQL(fetchTrending.movies.trending);
  const trendingSeries = await formatGQL(fetchTrending.series.trending);

  // Combine all of the Movies and Series
  const allTrending = [...trendingMovies, ...trendingSeries];

  // Sort the array by popularity
  const trending = allTrending.sort(compareByPopularity);

  // Pick one random Movies/Tv
  const random = getRandom(trending);

  return {
    props: {
      random,
      trending,
    },
    revalidate: 60, // Seconds // For ISR
  };
};

const Home = ({ trending, random }) => {
  console.log(random);

  return (
    <main className={styles.home}>
      <Head>
        <title>Netrailer</title>
      </Head>

      <Header random={random} />

      {/* <MainRow isPoster title="Trending" id="" data={trending} /> */}
      <GenreRow isPoster hasMovies moviesLimit={20} genreID="NToyOA==" />
      <GenreRow hasMovies seriesLimit={20} genreID="NToyNw==" />

      <GenreRow hasMovies hasSeries genreID="NToxNg==" />
      <GenreRow hasMovies hasSeries genreID="NTozNQ==" />
      <GenreRow hasMovies hasSeries genreID="NToxMDc1MQ==" />
      <GenreRow hasMovies hasSeries genreID="NToxMDc0OQ==" />
      <GenreRow hasMovies hasSeries genreID="NTo4Nzg=" />

      <h1>Home</h1>
    </main>
  );
};

export default Home;
