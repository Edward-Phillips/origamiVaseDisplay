import Link from 'next/link'
import styles from './sidebar.module.scss'

export default function Sidebar() {

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/origami/vaseDisplay">
        <a>Origami Vase design</a>
      </Link>
      <Link href="/copilot/EulerProject">
        <a>Project Euler</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}
