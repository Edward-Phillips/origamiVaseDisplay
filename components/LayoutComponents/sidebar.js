import Link from "next/link";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div role="button">Home</div>
      </Link>
      <Link href="/origami/vaseDisplay">
        <div role="button">Origami Vase design</div>
      </Link>
      <Link href="/copilot/EulerProject">
        <div role="button">Project Euler</div>
      </Link>
    </nav>
  );
}
