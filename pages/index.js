import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>$2 shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Button variant="primary">Click Me</Button>
      </main>
    </div>
  )
}
