import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Edward Phillips</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}