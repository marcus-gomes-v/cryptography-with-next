import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptography with NextJS</title>
        <meta name="description" content="Cryptography with nextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cryptography with <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Leti&acute;s understand cryptography
        </p>

      </main>

    </div>
  )
}
