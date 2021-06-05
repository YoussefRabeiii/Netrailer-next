import Head from "next/head";

import { Header } from "@components";
import { formatGQL, compareByPopularity, getRandom } from "@helpers";
import { minifiedWithGenreQuery, swiftClient, trendingQuery } from "@graphQL";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  // Get 20 Trending Movies/Tv
  const fetchTrending = await swiftClient.request(trendingQuery());

  // Get Movies/Series by Genre ID
  const fetchAction = await swiftClient.request(
    minifiedWithGenreQuery("NToyOA==")
  );
  const fetchComedy = await swiftClient.request(
    minifiedWithGenreQuery("NTozNQ==")
  );
  const fetchAnimation = await swiftClient.request(
    minifiedWithGenreQuery("NToxNg==")
  );
  const fetchFamily = await swiftClient.request(
    minifiedWithGenreQuery("NToxMDc1MQ==")
  );
  const fetchHorror = await swiftClient.request(
    minifiedWithGenreQuery("NToyNw==")
  );
  const fetchRomance = await swiftClient.request(
    minifiedWithGenreQuery("NToxMDc0OQ==")
  );
  const fetchSciFi = await swiftClient.request(
    minifiedWithGenreQuery("NTo4Nzg=")
  );

  // Format the data (DeStructure)
  const sciFiMovies = await formatGQL(fetchSciFi.node.movies.popular);
  const sciFiSeries = await formatGQL(fetchSciFi.node.series.popular);
  const actionMovies = await formatGQL(fetchAction.node.movies.popular);
  const comedyMovies = await formatGQL(fetchComedy.node.movies.popular);
  const comedySeries = await formatGQL(fetchComedy.node.series.popular);
  const horrorMovies = await formatGQL(fetchHorror.node.movies.popular);
  const familyMovies = await formatGQL(fetchFamily.node.movies.popular);
  const familySeries = await formatGQL(fetchFamily.node.series.popular);
  const trendingMovies = await formatGQL(fetchTrending.movies.trending);
  const trendingSeries = await formatGQL(fetchTrending.series.trending);
  const romanceMovies = await formatGQL(fetchRomance.node.movies.popular);
  const romanceSeries = await formatGQL(fetchRomance.node.series.popular);
  const animationMovies = await formatGQL(fetchAnimation.node.movies.popular);
  const animationSeries = await formatGQL(fetchAnimation.node.series.popular);

  // Combine all of the Movies and Series
  const allSciFi = [...sciFiMovies, ...sciFiSeries];
  const allFamily = [...familyMovies, ...familySeries];
  const allComedy = [...comedyMovies, ...comedySeries];
  const allRomance = [...romanceMovies, ...romanceSeries];
  const allTrending = [...trendingMovies, ...trendingSeries];
  const allAnimation = [...animationMovies, ...animationSeries];

  // Sort the array by popularity
  const sciFi = allSciFi.sort(compareByPopularity);
  const comedy = allComedy.sort(compareByPopularity);
  const family = allFamily.sort(compareByPopularity);
  const action = actionMovies.sort(compareByPopularity);
  const horror = horrorMovies.sort(compareByPopularity);
  const romance = allRomance.sort(compareByPopularity);
  const trending = allTrending.sort(compareByPopularity);
  const animation = allAnimation.sort(compareByPopularity);

  // Pick one random Movies/Tv
  const random = getRandom(trending);

  return {
    props: {
      // fetchSciFi,
      sciFi,
      random,
      comedy,
      action,
      horror,
      family,
      romance,
      trending,
      animation,
    },
    revalidate: 60, // Seconds // For ISR
  };
};

const Home = ({
  sciFi,
  random,
  comedy,
  action,
  horror,
  family,
  romance,
  trending,
  animation,
}) => {
  console.log(
    // sciFi
    random
    // family
    // horror
    // action
    // comedy
    // romance
    // trending
    // animation
  );

  return (
    <main className={styles.home}>
      <Head>
        <title>Netrailer</title>
      </Head>

      <Header random={random} />

      {/* <Row */}

      <h1>Home</h1>
    </main>
  );
};

export default Home;
