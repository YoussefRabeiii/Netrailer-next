import Head from "next/head";

import { Header } from "@components";
import { formatGQL } from "@helpers";
import { gqlClient, trendingQuery } from "@graphQL";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  // Get 10 Trending Movies/Tv
  const { trending } = await gqlClient.request(trendingQuery());

  const formatedTrending = await formatGQL(trending);

  // Pick one random Movies/Tv
  const random =
    formatedTrending[Math.floor(Math.random() * formatedTrending.length - 1)];

  return { props: { formatedTrending, random } };
};

const Home = ({ formatedTrending, random }) => {
  console.log(random);
  console.log(formatedTrending);

  return (
    <main className={styles.home}>
      <Head>
        <title>Netrailer</title>
      </Head>

      <Header />

      <h1>Home</h1>
    </main>
  );
};

export default Home;
