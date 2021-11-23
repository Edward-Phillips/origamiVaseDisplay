import Head from 'next/head'
import defaultStyle from './layout.module.css'

export default function Layout({ children, propStyle }) {
  const styles = propStyle ? propStyle : defaultStyle;
  return (
    <>
      <Head>
        <title>Edward Phillips</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
} 