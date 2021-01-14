import Head from "next/head";
import styles from "../styles/Home.module.css";
import MostPopularArticles from "../components/MostPopularArticles";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brunos Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>
          Bruno Costa
          <a href="https://github.com/ocBruno" className={styles.userGithub}>
            github
          </a>
        </h2>
        <div className={styles.userDescription}>
          <img className={styles.openToWorkPortrait} src="./opentowork.jpg" />
          Professional office and remote experience with frontend web
          development using HTML5, CSS, Javascript, React and other
          frameworks/libraries in an agile team participating in daily / weekly
          tech meetings in English and Portuguese. Currently focusing on react,
          nextjs and react native until my next professional opportunity arises.
        </div>
      </header>
      <main className={styles.main}>
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
