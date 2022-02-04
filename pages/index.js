import Link from "next/link";
import Layout from "components/LayoutComponents/layout";
import Sidebar from "components/LayoutComponents/sidebar";
import styles from "./index.module.scss";
export default function Index() {
  return (
    <div className={styles.indexContainer}>
      <section className={styles.descriptionContainer}>
        <article
          className={styles.articlePanel}
          title="it might look weird but it proves I can center an element"
        >
          <h3>Who am I?</h3>
          <p>
            I'm Ed, I am a full stack developer, currently working in react and
            Laravel, I also fold origami and do terrible drawings. Most of my
            side projects are written in react or node. I have recently been
            implementing typescript where convenient and am a big fan.
          </p>
          <p>
            I recommend you check out the{" "}
            <Link href="/origami/vaseDisplay">Origami Vase Design page</Link>
            ,it's a project I'm quite proud of to help me design origami vases,
            or check out{" "}
            <Link href="/copilot/EulerProject">
              Github Copilot's work on Euler Problems
            </Link>{" "} where I've been using comments to get github copilot to make solutions for Euler problems.
          </p>
        </article>
      </section>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
