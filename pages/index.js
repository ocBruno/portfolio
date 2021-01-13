import Head from "next/head";
import styles from "../styles/Home.module.css";
import MostPopularArticles from "../components/MostPopularArticles";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Bruno Costa</h2>
        <img className={styles.openToWorkPortrait} src="./opentowork.jpg" />

        <h5> Check out my most recent next js project pages</h5>
        <a
          className={styles.projectLink}
          alt="Check out my page integrated to ny api with custom hooks!"
          href="/news"
        >
          Most popular articles component integrated to NY times news api with
          custom hooks!
        </a>
      </main>
    </div>
  );
}
