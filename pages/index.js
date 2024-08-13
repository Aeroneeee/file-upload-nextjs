import Head from 'next/head';
import Main from './Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LUMOS Code Interview</title>
      </Head>

      <Main />

      <footer className={styles.footer}>
        Created by&nbsp;<b>Lumos</b>&nbsp;⚡️
      </footer>
    </div>
  );
}
