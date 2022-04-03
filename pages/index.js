import Head from 'next/head'
import Link from 'next/link'
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
          Let&acute;s understand cryptography
        </p>

        <div className={styles.grid}>
          <Link href="/api/cryptography/hash">
            <a className={styles.card}>
              <h2>Hash &rarr;</h2>
            </a>
          </Link>
         
          <Link href="/api/cryptography/salt">
            <a className={styles.card}>
              <h2>Salt &rarr;</h2>
            </a>
          </Link>
        
          <Link href="/api/cryptography/hmac">
            <a className={styles.card}>
              <h2>HMAC &rarr;</h2>
            </a>
          </Link>
        
          <Link href="/api/cryptography/symmetric-encryption">
            <a className={styles.card}>
              <h2>Symetric Encryption &rarr;</h2>
            </a>
          </Link>
        
         <Link href="/api/cryptography/keypairs">
            <a className={styles.card}>
              <h2>Keypair &rarr;</h2>
            </a>
          </Link>
       
         <Link href="/api/cryptography/asymmetric-encryption">
            <a className={styles.card}>
              <h2>Asymmetric Encryption &rarr;</h2>
            </a>
          </Link>
      
          <Link href="/api/cryptography/signing">
            <a className={styles.card}>
              <h2>Signing &rarr;</h2>
            </a>
          </Link>
        
        </div>
      </main>

    </div>
  )
}
