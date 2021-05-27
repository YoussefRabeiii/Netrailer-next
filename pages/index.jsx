import Head from "next/head";

import styles from "../styles/Home.module.css";

// export const getServerSideProps = async () => {
//   return {
//     props: {},
//   };
// };

const Home = () => {
  return (
    <main className={styles.home}>
      <Head>
        <title>Netrailer</title>
      </Head>

      <h1>Home</h1>
    </main>
  );
};

export default Home;
