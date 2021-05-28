import Head from "next/head";

import { Header } from "@components";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const fetchTrending = await fetch(
    "http://localhost:3000/api/graphql/trending"
  );

  const trending = await fetchTrending.json();

  return { props: { trending } };
};

const Home = ({ trending }) => {
  console.log(trending);

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
