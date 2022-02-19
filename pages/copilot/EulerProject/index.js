import Head from "next/head";
import Layout from "components/LayoutComponents/layout";
import Sidebar from "components/LayoutComponents/sidebar";
import ProblemCard from "components/projectEuler/problemCard";
import { PrismaClient } from "@prisma/client";
import styles from "./index.module.scss";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const eulerProblems = await prisma.eulerproblem.findMany();
  prisma.$disconnect();
  return {
    props: {
      eulerProblems,
    },
  };
}

const EulerProject = (props) => {
  const { eulerProblems } = props;

  return (
    <>
      <Head>
        <title>Project Euler Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        <h1 className={styles.title}>Project Euler Problems</h1>
        <p className={styles.description}>
          <a href="https://projecteuler.net/">Project Euler</a> is a series of
          challenging mathematical/computer programming problems. This site is a
          collection of solutions to the problems. Except this time, the
          problems will be solved by Github Copilot. I will be feeding in a
          description of the problem to Github Copilot and then the solution
          will be posted here.
        </p>
        <section className={styles.problemGrid}>
          {eulerProblems.map((problem, i) => {
            return <ProblemCard key={`problemcard-${i}`} problem={problem} />;
          })}
        </section>
      </section>
    </>
  );
};

EulerProject.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default EulerProject;
