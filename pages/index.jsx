import Head from "next/head";

import { gqlClient, trending } from "../graphQL";
import { Header } from "@components";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const fetchFuckinData = await fetch(
    "http://localhost:3000/api/graphql/trending"
  );

  const fuckinData = await fetchFuckinData.json();

  // const fuckinData = await gqlClient.request(trending(1));
  // .then((res) => res.json())
  // .catch(console.log());

  // console.log(fuckinData);

  return {
    props: { response: "Fuck you", fuckinData },
  };
};

const Home = ({ response, fuckinData }) => {
  // console.log(response);
  console.log(fuckinData);

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
