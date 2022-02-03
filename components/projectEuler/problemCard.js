import Shiitake from "shiitake";
import Link from "next/link";
import styles from "./problemCard.module.scss"

export default function ProblemCard({ problem }) {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{problem.title}</h3>
      <h4 className={styles.problemNumber}>Problem {problem.number}</h4>
      <Link href={`/copilot/EulerProject/${problem.number}`} passHref>
        <a>
          <Shiitake className={styles.problemStatement} lines={2} tagName="p">
            {problem.statement}
          </Shiitake>
        </a>
      </Link>
    </div>
  );
}
