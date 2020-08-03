import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import AppLayout from '../components/AppLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>devter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <nav>
          <Link href='/timeline'>
            <a>timeline</a>
          </Link>
        </nav>
      </AppLayout>
    </>
  );
}
