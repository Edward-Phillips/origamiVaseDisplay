import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/origami/vaseDisplay">
        <a>Origami Vase design</a>
      </Link>
      <Link href="/copilot/eulerProject">
        <a>Project Euler</a>
      </Link>
    </nav>
  )
}
